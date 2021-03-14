import React from 'react';
const Result = (props) => {
  const {sunrise, sunset, temp, pressure, speed, value, time} = props.data

const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    return ( 
<div className = "result">
    <h3>Wynik dla miasta: {value.toUpperCase()}</h3>
    <p>Dane dla dnia i godziny: <strong>{time}</strong></p>
    <p>temperatura: <strong>{temp} &#176;C</strong></p>
    <p>wschód słońca: <strong>{sunriseTime}</strong></p>
    <p>zachód słońca: <strong>{sunsetTime}</strong></p>
    <p>Aktualne ciśnienie: <strong>{pressure} hPa</strong></p>
    <p>Aktualna prędkość wiatru: <strong>{speed} m/s</strong></p>
    </div>
    
    );
}
 
export default Result;