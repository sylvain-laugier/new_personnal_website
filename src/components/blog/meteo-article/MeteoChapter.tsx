import React, { useRef, useEffect } from "react"
import meteoChapterStyles from "./meteoChapter.module.css"
import useRainScene from "../../../hooks/useRainScene"
import useWindowSize from "../../../hooks/useWindowSize"
import useCameraControls from "../../../hooks/useCameraControls"

interface MeteoChapterProps {
  children?: any
}

const MeteoChapter = ({ children }: MeteoChapterProps) => {
  const threeTargetRef = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()
  const { renderer, camera } = useRainScene({
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
      <div
        className={meteoChapterStyles.canvasContainer}
        ref={threeTargetRef}
      ></div>
      <div className={meteoChapterStyles.contentContainer}>
        <div className={meteoChapterStyles.chapterTitleContainer}>
          <h2 className={meteoChapterStyles.chapterTitle}>
            Partie 1 : la pluie
          </h2>
        </div>
        <div className={meteoChapterStyles.bodyContainer}>{children}</div>
      </div>
    </div>
  )
}

export default MeteoChapter
