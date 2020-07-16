import React from "react"
import { LabelTypes } from "./FranceMap-types"
import loadable from "@loadable/component"

const FranceMap = loadable(() => import("./FranceMap"))

const FranceMapRRJOUR = () => (
  <FranceMap
    mapTitle="Moyenne des précipitations quotidienne"
    label={LabelTypes.RRJOUR}
  />
)

export default FranceMapRRJOUR
