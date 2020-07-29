import React from "react"
import CitiesRainChart from "./CitiesRainChart"
import { NumStations } from "./types"

const AtlantiqueCitiesRainChart = () => {
  return (
    <CitiesRainChart
      firstCity={{ numPoste: NumStations.Nantes, title: " Nantes" }}
      secondCity={{ numPoste: NumStations.Bordeaux, title: "Bordeaux" }}
      title="La bataille de l'Atlantique"
    />
  )
}

export default AtlantiqueCitiesRainChart
