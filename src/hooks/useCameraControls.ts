import { PerspectiveCamera } from "three"
import { useHotkeys } from "react-hotkeys-hook"

const useCameraControls = (camera: PerspectiveCamera) => {
  useHotkeys("d", () => {
    camera.translateX(0.1)
  })
  useHotkeys("q", () => {
    camera.translateX(-0.1)
  })
  useHotkeys("z", () => {
    camera.translateY(0.1)
  })
  useHotkeys("s", () => {
    camera.translateY(-0.1)
  })
  useHotkeys("a", () => {
    camera.translateZ(0.1)
  })
  useHotkeys("e", () => {
    camera.translateZ(-0.1)
  })

  useHotkeys("o", () => {
    camera.rotateX(0.1)
  })
  useHotkeys("l", () => {
    camera.rotateX(-0.1)
  })
  useHotkeys("k", () => {
    camera.rotateY(0.1)
  })
  useHotkeys("m", () => {
    camera.rotateY(-0.1)
  })
  useHotkeys("i", () => {
    camera.rotateZ(0.1)
  })
  useHotkeys("p", () => {
    camera.rotateZ(-0.1)
  })
}

export default useCameraControls
