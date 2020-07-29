import React, { useRef, useEffect } from "react"
import { PosteData } from "./types"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import rainChartStyles from "./rainChart.module.css"

interface ChartData {
  label: string
  value: number
  color: am4core.Color
}

interface RainChartProps {
  posteData?: PosteData
  titleChart: string
}

const RainChart = ({ posteData, titleChart }: RainChartProps): JSX.Element => {
  const graphRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (posteData && graphRef.current) {
      const chart = am4core.create(graphRef.current, am4charts.TreeMap)

      chart.data = prepareRainChartData(posteData)

      chart.dataFields.value = "value"
      chart.dataFields.name = "label"
      chart.dataFields.color = "color"
      chart.logo.visible = false
    }
  }, [])
  return (
    <div className={rainChartStyles.chartContainer}>
      <h4 className={rainChartStyles.titleChart}>{titleChart}</h4>
      <div className={rainChartStyles.chart} ref={graphRef}></div>
    </div>
  )
}

export default RainChart

function prepareRainChartData(posteData: PosteData): ChartData[] {
  const { NBJRR1, NBJRR10, NBJRR50, NBJRR100 } = posteData
  return [
    {
      label: "jours sans pluie",
      value: roundTo2Decimals(365 - NBJRR1),
      color: am4core.color("#fdd835"),
    },
    {
      label: "jours où ça pleuviote (moins de 10mm) ",
      value: roundTo2Decimals(NBJRR1 - NBJRR10 - NBJRR50 - NBJRR100),
      color: am4core.color("#90caf9"),
    },
    {
      label: "jours où ça pleut bien (plus de 10mm)",
      value: roundTo2Decimals(NBJRR10),
      color: am4core.color("#1e88e5"),
    },
  ]
}

function roundTo2Decimals(value: number): number {
  return Math.round(value * 100) / 100
}
