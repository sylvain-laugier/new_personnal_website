import React from "react"
import CitiesRainChart from "./CitiesRainChart"
import { NumStations } from "./types"

const SudCitiesRainChart = () => {
  return (
    <CitiesRainChart
      firstCity={{
        numPoste: NumStations.SudOuest,
        title: "Sud-Ouest (Mont-de-Marsan)",
      }}
      secondCity={{ numPoste: NumStations.Nice, title: "Nice" }}
      title="Deux suds différents"
    />
  )
}

export default SudCitiesRainChart
