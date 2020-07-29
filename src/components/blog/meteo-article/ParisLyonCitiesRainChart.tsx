import React from "react"
import CitiesRainChart from "./CitiesRainChart"
import { NumStations } from "./types"

const ParisLyonCitiesRainChart = () => {
  return (
    <CitiesRainChart
      firstCity={{ numPoste: NumStations.Orly, title: "Paris" }}
      secondCity={{ numPoste: NumStations.Lyon, title: "Lyon" }}
      title="Paris et Lyon"
    />
  )
}

export default ParisLyonCitiesRainChart
