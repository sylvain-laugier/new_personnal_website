import React from "react"
import technologiesStyle from "./technologies.module.css"
import portFolioStyles from "./portFolio.module.css"

const PortFolio = () => {
  return (
    <div
      className={`${technologiesStyle.technoLogoContainer} ${portFolioStyles.container}`}
    >
      <a
        href="https://www.electronicmusicforpeoplewhodontlikeelectronicmusic.com/"
        target="_blank"
        style={{ color: "white" }}
      >
        <h4 className={portFolioStyles.title}>An example of what I can do</h4>
      </a>
    </div>
  )
}

export default PortFolio
