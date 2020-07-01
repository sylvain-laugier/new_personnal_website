import React from "react"
import ReactLogo from "../../svg-logo/react-logo.svg"
import TypescriptLogo from "../../svg-logo/typescript-logo.svg"
import JavascriptLogo from "../../svg-logo/javascript-logo.svg"
import ReduxLogo from "../../svg-logo/redux-logo.svg"
import NodeJSLogo from "../../svg-logo/nodejs-logo.svg"
import MongoDBLogo from "../../svg-logo/mongodb-logo.svg"
import Neo4JLogo from "../../svg-logo/neo4j-logo.svg"
import PythonLogo from "../../svg-logo/python-logo.svg"
import PandasLogo from "../../svg-logo/pandas-logo.svg"
import GatsbyJSLogo from "../../svg-logo/gatsbyjs-logo.svg"
import RxJSLogo from "../../svg-logo/rxjs-logo.svg"
import AngularLogo from "../../svg-logo/angular-logo.svg"
import ExpressLogo from "../../svg-logo/express-logo.svg"
import technoLogoStyles from "./technoLogo.module.css"

interface TechnoLogoProps {
  logoName: string
}

export enum LogoNames {
  ReactLogo = "React",
  TypescriptLogo = "Typescript",
  JavascriptLogo = "Javascript",
  ReduxLogo = "Redux",
  NodeJSLogo = "NodeJS",
  MongoDBLogo = "MongoDB",
  Neo4JLogo = "Neo4J",
  PythonLogo = "Python",
  PandasLogo = "Pandas",
  GatsbyJSLogo = "GatsbyJS",
  RxJSLogo = "RxJS",
  AngularLogo = "Angular",
  ExpressLogo = "Express",
}
const TechnoLogo = ({ logoName }: TechnoLogoProps): JSX.Element => {
  return (
    <div className={technoLogoStyles.logoContainer}>
      {getLogoComponent(logoName)}
      <span className={technoLogoStyles.tooltiptext}>{logoName}</span>
    </div>
  )
}

function getLogoComponent(logoName: string): JSX.Element {
  switch (logoName) {
    case LogoNames.ReactLogo: {
      return (
        <>
          <ReactLogo />
        </>
      )
    }
    case LogoNames.TypescriptLogo: {
      return (
        <>
          <TypescriptLogo />
        </>
      )
    }
    case LogoNames.JavascriptLogo: {
      return (
        <>
          <JavascriptLogo />
        </>
      )
    }
    case LogoNames.ReduxLogo: {
      return (
        <>
          <ReduxLogo />
        </>
      )
    }
    case LogoNames.NodeJSLogo: {
      return (
        <>
          <NodeJSLogo style={{ width: 64 }} />
        </>
      )
    }
    case LogoNames.MongoDBLogo: {
      return (
        <>
          <MongoDBLogo />
        </>
      )
    }
    case LogoNames.Neo4JLogo: {
      return (
        <>
          <Neo4JLogo />
        </>
      )
    }
    case LogoNames.PythonLogo: {
      return (
        <>
          <PythonLogo />
        </>
      )
    }
    case LogoNames.PandasLogo: {
      return (
        <>
          <PandasLogo />
        </>
      )
    }
    case LogoNames.GatsbyJSLogo: {
      return (
        <>
          <GatsbyJSLogo />
        </>
      )
    }
    case LogoNames.AngularLogo: {
      return (
        <>
          <AngularLogo />
        </>
      )
    }
    case LogoNames.RxJSLogo: {
      return (
        <>
          <RxJSLogo />
        </>
      )
    }
    case LogoNames.ExpressLogo: {
      return (
        <>
          <ExpressLogo style={{ width: 64 }} />
        </>
      )
    }

    default: {
      return <></>
    }
  }
}

export default TechnoLogo
