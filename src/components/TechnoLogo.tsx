import React from "react"
import ReactLogo from "../svg-logo/react-logo.svg"
import TypescriptLogo from "../svg-logo/typescript-logo.svg"
import JavascriptLogo from "../svg-logo/javascript-logo.svg"
import ReduxLogo from "../svg-logo/redux-logo.svg"
import NodeJSLogo from "../svg-logo/nodejs-logo.svg"
import MongoDBLogo from "../svg-logo/mongodb-logo.svg"
import Neo4JLogo from "../svg-logo/neo4j-logo.svg"
import PythonLogo from "../svg-logo/python-logo.svg"
import PandasLogo from "../svg-logo/pandas-logo.svg"
import GatsbyJSLogo from "../svg-logo/gatsbyjs-logo.svg"
import RxJSLogo from "../svg-logo/rxjs-logo.svg"
import AngularLogo from "../svg-logo/angular-logo.svg"
import ExpressLogo from "../svg-logo/express-logo.svg"
import technoLogoStyles from "./technoLogo.module.css"
import ReactTooltip from "react-tooltip"

interface TechnoLogoProps {
  logoName: string
}

export enum LogoNames {
  ReactLogo = "ReactLogo",
  TypescriptLogo = "TypescriptLogo",
  JavascriptLogo = "JavascriptLogo",
  ReduxLogo = "ReduxLogo",
  NodeJSLogo = "NodeJSLogo",
  MongoDBLogo = "MongoDBLogo",
  Neo4JLogo = "Neo4JLogo",
  PythonLogo = "PythonLogo",
  PandasLogo = "PandasLogo",
  GatsbyJSLogo = "GatsbyJSLogo",
  RxJSLogo = "RxJSLogo",
  AngularLogo = "AngularLogo",
  ExpressLogo = "ExpressLogo",
}
const TechnoLogo = ({ logoName }: TechnoLogoProps): JSX.Element => {
  return (
    <div className={technoLogoStyles.logoContainer}>
      {getLogoComponent(logoName)}
      <ReactTooltip
        type="dark"
        effect="solid"
        className={technoLogoStyles.tooltip}
      />
    </div>
  )
}

function getLogoComponent(logoName: string): JSX.Element {
  switch (logoName) {
    case LogoNames.ReactLogo: {
      return (
        <>
          <ReactLogo data-tip="React" />
        </>
      )
    }
    case LogoNames.TypescriptLogo: {
      return (
        <>
          <TypescriptLogo data-tip="Typescript" />
        </>
      )
    }
    case LogoNames.JavascriptLogo: {
      return (
        <>
          <JavascriptLogo data-tip="Javascript" />
        </>
      )
    }
    case LogoNames.ReduxLogo: {
      return (
        <>
          <ReduxLogo data-tip="Redux" />
        </>
      )
    }
    case LogoNames.NodeJSLogo: {
      return (
        <>
          <NodeJSLogo style={{ width: 64 }} data-tip="Node JS" />
        </>
      )
    }
    case LogoNames.MongoDBLogo: {
      return (
        <>
          <MongoDBLogo data-tip="Mongo DB" />
        </>
      )
    }
    case LogoNames.Neo4JLogo: {
      return (
        <>
          <Neo4JLogo data-tip="Neo 4J" />
        </>
      )
    }
    case LogoNames.PythonLogo: {
      return (
        <>
          <PythonLogo data-tip="Python" />
        </>
      )
    }
    case LogoNames.PandasLogo: {
      return (
        <>
          <PandasLogo data-tip="Pandas" />
        </>
      )
    }
    case LogoNames.GatsbyJSLogo: {
      return (
        <>
          <GatsbyJSLogo data-tip="Gatsby" />
        </>
      )
    }
    case LogoNames.AngularLogo: {
      return (
        <>
          <AngularLogo data-tip="Angular" />
        </>
      )
    }
    case LogoNames.RxJSLogo: {
      return (
        <>
          <RxJSLogo data-tip="RxJS" />
        </>
      )
    }
    case LogoNames.ExpressLogo: {
      return (
        <>
          <ExpressLogo style={{ width: 64 }} data-tip="Express" />
        </>
      )
    }

    default: {
      return <></>
    }
  }
}

export default TechnoLogo
