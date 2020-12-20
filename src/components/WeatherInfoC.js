import React from 'react'
import WeatherInfo from "./WeatherInfo";

const WeatherInfoC = (props) => {
    return (

        <WeatherInfo weatherInfo={{...props.weatherInfo}}/>


    )
}

export default WeatherInfoC