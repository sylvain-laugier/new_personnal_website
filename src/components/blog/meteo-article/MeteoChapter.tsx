import React, { useRef, useEffect } from "react"
import meteoChapterStyles from "./meteoChapter.module.css"
import useThree from "../../../hooks/useThreeJs"
import useWindowSize from "../../../hooks/useWindowSize"
import useCameraControls from "../../../hooks/useCameraControls"

const MeteoChapter = () => {
  const threeTargetRef = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()
  const { renderer, camera } = useThree({
    ...windowSize,
  })

  useCameraControls(camera)
  useEffect(() => {
    if (threeTargetRef && threeTargetRef.current && renderer) {
      threeTargetRef.current.appendChild(renderer.domElement)
    }
  }, [renderer, threeTargetRef])

  return (
    <div className={meteoChapterStyles.container}>
      <div className={meteoChapterStyles.chapterContainer}>
        <div ref={threeTargetRef}></div>
      </div>
    </div>
  )
}

export default MeteoChapter
