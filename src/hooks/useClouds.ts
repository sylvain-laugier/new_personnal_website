import * as THREE from "three"
import smoke from "./smoke2"
import { getPositionInterval } from "./useRainScene"
import { useEffect, useRef, useState } from "react"

const useClouds = (numberOfClouds: number, width: number, height: number) => {
  const textureLoader = new THREE.TextureLoader()
  const cloudInitialPositions = useRef<{ x: number; y: number; z: number }[]>(
    []
  )
  const [clouds, setClouds] = useState<
    THREE.Mesh<THREE.PlaneBufferGeometry, THREE.MeshLambertMaterial>[]
  >([])

  useEffect(() => {
    textureLoader.load(
      smoke,
      texture => {
        const cloudGeo = new THREE.PlaneBufferGeometry(width, height)
        const cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
        })
        const cloudsToAdd = []

        for (let i = 0; i < numberOfClouds; i += 1) {
          const cloud = new THREE.Mesh(cloudGeo, cloudMaterial)
          const cloudPosition = {
            x: getPositionInterval("x", { width: width }),
            y: 400,
            z: getPositionInterval("z", { height: height }),
          }
          cloudInitialPositions.current.push(cloudPosition)
          const { x, y, z } = cloudPosition
          cloud.position.set(x, y, z)
          cloud.rotation.x = 1.16
          cloud.rotation.y = -0.12
          cloud.rotation.z = Math.random() * 2 * Math.PI
          cloud.material.opacity = 0.6
          cloudsToAdd.push(cloud)
        }
        setClouds(cloudsToAdd)
      },
      () => {},
      error => {
        console.log(error)
      }
    )
    return () => {}
  }, [numberOfClouds, width, height])

  return { clouds }
}

export default useClouds
