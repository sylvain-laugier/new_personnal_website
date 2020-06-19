import React from "react"
import FranceMap, { LabelTypes } from "./FranceMap"

const FranceMapRRJOUR = () => (
  <FranceMap
    mapTitle="Moyenne des précipitations quotidienne"
    label={LabelTypes.RRJOUR}
  />
)

export default FranceMapRRJOUR
