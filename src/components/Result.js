import React from 'react';
const Result = (props) => {
  const {sunrise, sunset, temp, pressure, speed, value, time} = props.data

const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    return ( 
<div className = "result">
    <h3>Wynik dla miasta: {value}</h3>
    <h4>Dane dla dnia i godziny: {time}</h4>
    <h4>temperatura: {temp}</h4>
    <h4>wschód słońca: {sunriseTime}</h4>
    <h4>zachód słońca: {sunsetTime}</h4>
    <h4>ciśnienie: {pressure}</h4>
    <h4>prędkość wiatru: {speed}</h4>
    </div>
    
    );
}
 
export default Result;