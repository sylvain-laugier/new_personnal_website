import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { WeatherData, PosteData } from "./types"
import RainChart from "./RainChart"
import citiesRainChartStyles from "./citiesRainChart.module.css"

interface RainChartData {
  sourceMeteoData: {
    id: string
    data: {
      weatherData: WeatherData
    }
  }
}

interface CitiesRainChartProps {
  firstCity: {
    numPoste: string
    title: string
  }
  secondCity: {
    numPoste: string
    title: string
  }
  title: string
}

const CitiesRainChart = ({
  firstCity,
  secondCity,
  title,
}: CitiesRainChartProps): JSX.Element => {
  const pageQuery = useStaticQuery<RainChartData>(graphql`
    query cityWeatherData {
      sourceMeteoData {
        id
        data {
          weatherData {
            pluieSumByYear {
              data {
                NUM_POSTE
                NBJRR1
                NBJRR10
                NBJRR50
                NBJRR100
              }
            }
          }
        }
      }
    }
  `)
  const graphRef = useRef<HTMLDivElement>(null)

  const firstCityData = findPosteDataWithNumStation(
    firstCity.numPoste,
    pageQuery
  )
  const secondCityData = findPosteDataWithNumStation(
    secondCity.numPoste,
    pageQuery
  )
  return (
    <>
      <h3>{title}</h3>
      <div className={citiesRainChartStyles.doubleRainChartContainer}>
        <RainChart posteData={firstCityData} titleChart={firstCity.title} />
        <RainChart posteData={secondCityData} titleChart={secondCity.title} />
      </div>
    </>
  )
}

export default CitiesRainChart

function findPosteDataWithNumStation(
  numStation: string,
  pageQuery: RainChartData
): PosteData | undefined {
  if (!pageQuery) {
    return undefined
  }
  return pageQuery.sourceMeteoData.data.weatherData.pluieSumByYear.data.find(
    posteData => posteData.NUM_POSTE === numStation
  )
}
