import React from "react"
import TechnoLogo, { LogoNames } from "./TechnoLogo"
import technologiesStyle from "./technologies.module.css"

const Technologies = () => {
  return (
    <div className={technologiesStyle.technoLogoContainer}>
      <h3 className={technologiesStyle.technoPunchLine}> What I use</h3>
      <div className={technologiesStyle.separator} />
      <div className={technologiesStyle.technoLogoLineContainer}>
        <TechnoLogo logoName={LogoNames.ReactLogo} />
        <TechnoLogo logoName={LogoNames.TypescriptLogo} />
        <TechnoLogo logoName={LogoNames.ReduxLogo} />
        <TechnoLogo logoName={LogoNames.AngularLogo} />
        <TechnoLogo logoName={LogoNames.RxJSLogo} />
        <TechnoLogo logoName={LogoNames.GatsbyJSLogo} />
      </div>
      <div className={technologiesStyle.technoLogoLineContainer}>
        <TechnoLogo logoName={LogoNames.PythonLogo} />
        <TechnoLogo logoName={LogoNames.NodeJSLogo} />
        <TechnoLogo logoName={LogoNames.ExpressLogo} />
        <TechnoLogo logoName={LogoNames.PandasLogo} />
        <TechnoLogo logoName={LogoNames.MongoDBLogo} />
        <TechnoLogo logoName={LogoNames.Neo4JLogo} />
      </div>
    </div>
  )
}

export default Technologies
