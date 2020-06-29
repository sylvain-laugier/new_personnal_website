import * as THREE from "three"
import { useEffect, useRef } from "react"
import smoke from "./smoke2"
import { Vector3 } from "three"
interface UseThreeParams {
  width?: number
  height?: number
}
const useThree = ({ width, height }: UseThreeParams) => {
  const usedWidth = width || window.innerWidth
  const usedHeight = height || window.innerHeight
  const clouds: THREE.Mesh<
    THREE.PlaneBufferGeometry,
    THREE.MeshLambertMaterial
  >[] = []
  const threenv = useRef({
    renderer: new THREE.WebGLRenderer(),
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(75, usedWidth / usedHeight, 0.1, 1000),
    clouds: clouds,
    flash: new THREE.PointLight(0x1a237e, 50, 0, 1.7),
  })

  useEffect(() => {
    const ambient = new THREE.AmbientLight(0x455a64)
    threenv.current.scene.add(ambient)
    const directionalLight = new THREE.DirectionalLight(0x455a64)
    directionalLight.position.set(0, 0, 1)
    threenv.current.scene.add(directionalLight)
    threenv.current.scene.fog = new THREE.FogExp2(0x11111f, 0.002)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.set(
      getPositionInterval("x", { width: usedWidth }),
      100,
      getPositionInterval("z", { height: usedHeight })
    )
    const axesHelper = new THREE.AxesHelper(5)
    threenv.current.scene.add(axesHelper)
    threenv.current.scene.add(cube)
    threenv.current.flash.position.set(
      getPositionInterval("x", { width: usedWidth }),
      100,
      getPositionInterval("z", { height: usedHeight })
    )

    threenv.current.scene.add(threenv.current.flash)
    setInterval(() => console.log(threenv.current.camera.rotation), 1000)
    // camera position
    // threenv.current.camera.position.set(3.5, -3.5, 5)
    threenv.current.camera.rotation.x = 1.2
    threenv.current.camera.rotation.y = -0.1
    const animate = function () {
      requestAnimationFrame(animate)
      threenv.current.clouds.forEach((cloud, i) => {
        cloud.translateX(0.1)
        if (i % 2 == 0) {
          cloud.rotation.z -= 0.0001
        } else {
          cloud.rotation.z += 0.0001
        }
      })
      if (Math.random() > 0.97) {
        threenv.current.flash.power = 50 + Math.random() * 300
        if (threenv.current.flash.power < 100)
          threenv.current.flash.position.set(
            getPositionInterval("x", { width: usedWidth }),
            100,
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
    // remove clouds
    threenv.current.clouds.forEach(cloud => threenv.current.scene.remove(cloud))
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load(
      smoke,
      texture => {
        const cloudGeo = new THREE.PlaneBufferGeometry(usedWidth, usedHeight)
        const cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
        })

        const numberOfClouds = 10
        for (let i = 0; i < numberOfClouds; i += 1) {
          const cloud = new THREE.Mesh(cloudGeo, cloudMaterial)
          cloud.position.set(
            getPositionInterval("x", { width: usedWidth }),
            400,
            getPositionInterval("z", { height: usedHeight })
          )
          cloud.rotation.x = 1.16
          cloud.rotation.y = -0.12
          cloud.rotation.z = Math.random() * 2 * Math.PI
          cloud.material.opacity = 0.6
          threenv.current.clouds.push(cloud)
          threenv.current.scene.add(cloud)
        }
      },
      () => {},
      error => {
        console.log(error)
      }
    )
  }, [width, height])

  return threenv.current
}

function getPositionInterval(
  axis: string,
  { width, height }: { width?: number; height?: number }
): number {
  if ((axis = "x")) {
    return width ? (Math.random() * width) / 2 - width / 4 : 0
  }
  if ((axis = "z")) {
    return height ? ((Math.random() * height) / 4) * -1 : 0
  }
  return 0
}
export default useThree
