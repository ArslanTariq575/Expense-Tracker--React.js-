import React from "react";
import './Chartbar.css'

function Chartbar(props){
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill">

                </div>
                <div className="chart-bar__label">{props.label}</div>
            </div>
        </div>
    )
}

export default Chartbar