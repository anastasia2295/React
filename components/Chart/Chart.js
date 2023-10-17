import React from "react";
import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = props => {
    return (
    <div className="chart">
      {props.dataPoints.map((dataPoint => 
      <ChartBar 
      key={dataPoint.id}
      value={dataPoint}
      maxValue={null}
      label={dataPoint.label}
      />
      ))}
    </div>
    )
}
export default Chart