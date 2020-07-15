import * as THREE from "three"

const useRain = (width: number, height: number, rainCount: number) => {
  const rainGeometry = new THREE.Geometry()
  const rainDropVelocity = []
  for (let i = 0; i < rainCount; i++) {
    const rainDrop = new THREE.Vector3(
      Math.random() * 400 - 200,
      Math.random() * 500 - 250,
      Math.random() * 400 - 200
    )
    rainDropVelocity.push(0)
    rainGeometry.vertices.push(rainDrop)
  }

  const rainMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.1,
    transparent: true,
  })
  const rain = new THREE.Points(rainGeometry, rainMaterial)

  return { rain, rainDropVelocity }
}

export default useRain
