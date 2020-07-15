import * as THREE from "three"
import { getPositionInterval } from "./useRainScene"

const useThunder = (width: number, height: number) => {
  const flash = new THREE.PointLight(0x1a237e, 50, 0, 1.7)
  flash.position.set(
    getPositionInterval("x", { width }),
    100,
    getPositionInterval("z", { height })
  )

  return flash
}

export default useThunder
