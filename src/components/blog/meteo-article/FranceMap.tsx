import React, { useEffect, useRef, FunctionComponent } from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery, useStaticQuery } from "gatsby"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import franceMapStyles from "./franceMap.module.css"

export enum LabelTypes {
  INST = "INST",
  RR = "RR",
  NBJRR1 = "NBJRR1",
  NBRR = "NBRR",
  RRJOUR = "RRJOUR",
}
interface FranceMapProps {
  label: LabelTypes
  mapTitle: string
}

interface VoronoiData {
  geoPolygon: {
    latitude: number
    longitude: number
  }
  nom: string
  id: string
}

interface VoronoiSeriesData extends VoronoiData {
  value?: number
}

interface WeatherData {
  pluieSumByYear: {
    data: {
      NUM_POSTE: string
      INST: number
      RR: number
      NBJRR1: number
      NBRR: number
      RRJOUR: number
    }[]
  }
}

interface franceMapData {
  sourceMeteoData: {
    id: string
    data: {
      voronoiData: VoronoiData[]
      weatherData: WeatherData
    }
  }
}

const FranceMap: FunctionComponent<FranceMapProps> = ({ label, mapTitle }) => {
  const pageQuery = useStaticQuery<franceMapData>(graphql`
    query franceMapData {
      sourceMeteoData {
        id
        data {
          voronoiData {
            geoPolygon {
              latitude
              longitude
            }
            nom
            id
          }
          weatherData {
            pluieSumByYear {
              data {
                NUM_POSTE
                INST
                RR
                NBJRR1
                NBRR
                RRJOUR
              }
            }
          }
        }
      }
    }
  `)
  const graphRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (pageQuery && graphRef.current) {
      const voronoiData = pageQuery.sourceMeteoData.data.voronoiData
      const weatherData =
        pageQuery.sourceMeteoData.data.weatherData.pluieSumByYear.data
      var chart = am4core.create(graphRef.current, am4maps.MapChart)

      // Set map definition
      // Set projection
      chart.projection = new am4maps.projections.Miller()

      const voronoiSeriesData: VoronoiSeriesData[] = voronoiData.map(
        voronoiStation => {
          const weatherStation = weatherData.find(
            weatherDatum => weatherDatum["NUM_POSTE"] == voronoiStation.id
          )
          return {
            ...voronoiStation,
            value: weatherStation ? weatherStation[label] : undefined,
          }
        }
      )

      let voronoiSeries = chart.series.push(new am4maps.MapPolygonSeries())

      voronoiSeries.data = voronoiSeriesData
      let voronoiTemplate = voronoiSeries.mapPolygons.template
      voronoiTemplate.tooltipText = "{nom}{value}"
      voronoiSeries.heatRules.push({
        property: "fill",
        target: voronoiTemplate,
        min: am4core.color("#e1f5fe"),
        max: am4core.color("#01579b"),
      })
    }
  }, [pageQuery])
  return (
    <div className={franceMapStyles.container}>
      <div className={franceMapStyles.mapTitle}>
        <h3>{mapTitle}</h3>
      </div>
      <div className={franceMapStyles.map} ref={graphRef}></div>
    </div>
  )
}

export default FranceMap
