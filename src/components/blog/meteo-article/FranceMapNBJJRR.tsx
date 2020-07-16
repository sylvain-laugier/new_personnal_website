import React from "react"
import { LabelTypes } from "./FranceMap-types"
import loadable from "@loadable/component"

const FranceMap = loadable(() => import("./FranceMap"))

const FranceMapRR = () => (
  <FranceMap mapTitle="Nombre de jour de pluie" label={LabelTypes.NBJRR1} />
)

export default FranceMapRR
