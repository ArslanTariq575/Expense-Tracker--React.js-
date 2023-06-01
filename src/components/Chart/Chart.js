import React from "react";
import './Chart.css'
import Chartbar from "./Chartbar";
function Chart(props){
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
                <Chartbar
                key= {dataPoint.label}
                value = {dataPoint.value}
                maxvalue = {null}
                label = {dataPoint.label}
                />
            })}
        </div>
    )
}
export default Chart