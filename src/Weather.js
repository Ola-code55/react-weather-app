import React from "react";
import "./Weather.css"
export default function Weather () {
    return (
 <div className="Weather">
    <h1>Lagos</h1>
 <ul>
    <li>Tuesday 14:00</li>
    <li>Cloudy</li>
 </ul>
<div className = "row">
    <div className ="col-6">
        <div className="clearfix">
<img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"

/>


<span className="temperature">27</span>
<span className="unit">℃</span>
   </div>
   </div>
   
    <div className = "col-6">
        <ul>
            <li> Precipitation: 71%</li>
            <li>Wind: 13 km/h</li>
        
        </ul>
    </div>
</div>
 </div>
    )
}