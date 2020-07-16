import React from "react"
import { LabelTypes } from "./FranceMap-types"
import loadable from "@loadable/component"

const FranceMap = loadable(() => import("./FranceMap"))
const FranceMapRR = () => (
  <FranceMap mapTitle="Précipitations annuelles en mm" label={LabelTypes.RR} />
)

export default FranceMapRR
