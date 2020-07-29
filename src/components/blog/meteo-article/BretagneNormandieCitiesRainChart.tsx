import React from "react"
import CitiesRainChart from "./CitiesRainChart"
import { NumStations } from "./types"

const BretagneNormandieCitiesRainChart = () => {
  return (
    <CitiesRainChart
      firstCity={{
        numPoste: NumStations.Brest,
        title: "Une année typique à Brest",
      }}
      secondCity={{
        numPoste: NumStations.Normandie,
        title: "Une année typique à Cherbourg",
      }}
      title="La bataille Bretagne vs Normandie"
    />
  )
}

export default BretagneNormandieCitiesRainChart
