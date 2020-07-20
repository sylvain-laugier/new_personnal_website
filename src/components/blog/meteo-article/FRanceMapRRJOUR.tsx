import React from "react"
import { LabelTypes } from "./FranceMap-types"
import loadable from "@loadable/component"

const FranceMap = loadable(() => import("./FranceMap"))

const FranceMapRRJOUR = () => (
  <FranceMap
    mapTitle="Quantité de pluie moyenne par jour de pluie en mm"
    label={LabelTypes.RRJOUR}
  />
)

export default FranceMapRRJOUR
