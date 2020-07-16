import * as THREE from "three"
import { useEffect, useRef } from "react"
import useClouds from "./useClouds"
import useThunder from "./useThunder"
import useRain from "./useRain"

interface UseRainSceneParams {
  width?: number
  height?: number
}
const useRainScene = ({ width, height }: UseRainSceneParams) => {
  const usedWidth =
    width || typeof window !== "undefined" ? window.innerWidth : 0
  const usedHeight =
    height || typeof window !== "undefined" ? window.innerHeight : 0
  const { clouds } = useClouds(10, usedWidth, usedHeight)
  const flash = useThunder(usedWidth, usedHeight)
  const { rain, rainDropVelocity } = useRain(usedWidth, usedHeight, 20000)

  const threenv = useRef({
    renderer: new THREE.WebGLRenderer(),
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(75, usedWidth / usedHeight, 0.1, 1000),
    clouds,
    flash,
  })

  useEffect(() => {
    // lights and ambiant
    const ambient = new THREE.AmbientLight(0x455a64)
    threenv.current.scene.add(ambient)
    const directionalLight = new THREE.DirectionalLight(0x455a64)
    directionalLight.position.set(0, 0, 1)
    threenv.current.scene.add(directionalLight)
    threenv.current.scene.fog = new THREE.FogExp2(0x11111f, 0.002)
    threenv.current.scene.add(rain)

    threenv.current.camera.rotation.x = 1.2
    threenv.current.camera.rotation.y = -0.1
    const animate = function () {
      requestAnimationFrame(animate)

      threenv.current.clouds.forEach((cloud, i) => {
        if (i % 2 == 0) {
          cloud.rotation.z -= 0.0005
        } else {
          cloud.rotation.z += 0.0005
        }
      })

      rain.geometry.vertices.forEach((rainVertice, i) => {
        rainDropVelocity[i] -= 0.1 + Math.random() * 0.1
        rainVertice.y += rainDropVelocity[i]
        if (rainVertice.y < -200) {
          rainVertice.y = Math.random() * 500 - 250
          rainDropVelocity[i] = 0
        }
      })
      rain.geometry.verticesNeedUpdate = true
      rain.rotation.y += 0.002

      if (Math.random() > 0.97) {
        threenv.current.flash.power = 50 + Math.random() * 300
        if (threenv.current.flash.power < 100)
          threenv.current.flash.position.set(
            getPositionInterval("x", { width: usedWidth }),
            500,
            getPositionInterval("z", { height: usedHeight })
          )
      } else {
        threenv.current.flash.power = 0
      }
      threenv.current.renderer.render(
        threenv.current.scene,
        threenv.current.camera
      )
    }
    animate()
  }, [])

  useEffect(() => {
    threenv.current.renderer.setSize(usedWidth, usedHeight)
    threenv.current.camera.aspect = usedWidth / usedHeight
  }, [usedWidth, usedHeight])

  useEffect(() => {
    threenv.current.clouds.forEach(cloud => threenv.current.scene.remove(cloud))
    clouds.forEach(cloud => threenv.current.scene.add(cloud))
    threenv.current.clouds = clouds
  }, [clouds])

  useEffect(() => {
    threenv.current.scene.remove(threenv.current.flash)
    threenv.current.flash = flash
    threenv.current.scene.add(threenv.current.flash)
  }, [flash])

  return threenv.current
}

export function getPositionInterval(
  axis: string,
  { width, height }: { width?: number; height?: number }
): number {
  if ((axis = "x")) {
    return width ? (Math.random() * width) / 2 - width / 4 : 0
  }
  if ((axis = "y")) {
    return height ? ((Math.random() * height) / 4) * -1 : 0
  }
  if ((axis = "z")) {
    return height ? Math.random() * 500 - 250 : 0
  }
  return 0
}
export default useRainScene
