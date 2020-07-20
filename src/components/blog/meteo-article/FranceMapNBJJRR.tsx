import React from "react"
import { LabelTypes } from "./FranceMap-types"
import loadable from "@loadable/component"

const FranceMap = loadable(() => import("./FranceMap"))

const FranceMapRR = () => (
  <FranceMap
    mapTitle="Nombre de jour par an où il pleut au moins 1mm"
    label={LabelTypes.NBJRR1}
  />
)

export default FranceMapRR
