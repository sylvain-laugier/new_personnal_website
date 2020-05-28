import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"

function FranceMap({ voronoiPolygon, weatherData }) {
  const graphRef = useRef()
  useEffect(() => {
    var chart = am4core.create(graphRef.current, am4maps.MapChart)
    // Set map definition
    const RRData = weatherData[0].RR
    console.log(voronoiPolygon)
    // Set projection
    chart.projection = new am4maps.projections.Miller()

    const voronoiStationData = voronoiPolygon.map(voronoiStation => {
      const rrData = RRData.find(rrval => rrval.id == voronoiStation.id)
      return {
        ...voronoiStation,
        value: rrData ? rrData.value : undefined,
      }
    })

    let voronoiSeries = chart.series.push(new am4maps.MapPolygonSeries())

    voronoiSeries.data = voronoiStationData
    let voronoiTemplate = voronoiSeries.mapPolygons.template
    voronoiTemplate.tooltipText = "{value}"
    voronoiSeries.heatRules.push({
      property: "fill",
      target: voronoiTemplate,
      min: am4core.color("#e1f5fe"),
      max: am4core.color("#01579b"),
    })
  }, [])
  return (
    <div
      style={{ height: "800px", width: "1200px" }}
      id="test"
      ref={graphRef}
    ></div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query voronoiData {
        sourceMeteoData {
          id
          data {
            voronoi {
              geoPolygon {
                latitude
                longitude
              }
              id
            }
            weatherData {
              RR {
                id
                value
              }
            }
          }
        }
      }
    `}
    render={({ sourceMeteoData }) => {
      return (
        <FranceMap
          voronoiPolygon={sourceMeteoData.data.voronoi}
          weatherData={sourceMeteoData.data.weatherData}
        />
      )
    }}
  />
)
