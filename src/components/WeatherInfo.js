import React from 'react'
import '../App.css';
import {temperatureConverter} from "../functions/tempratureConverter";
import {pressureConverter} from "../functions/pressureConverter";

const WeatherInfo = (props) => {
    const {city, temp, temp_min, temp_max, pressure,country,humidity } = props.weatherInfo
    return (
        <div style={{paddingTop: 15}}>
            <div className='city'>{city}, {country}</div>
            <div className='temperature'>
                <span className='temperature_current'>{temperatureConverter(temp)}&deg;</span>
            </div>
            <div className='her'>
                <div>{pressureConverter(pressure)}</div>
                <div>{humidity}</div>
            </div>
            {/*
            {temperatureConverter(temp) > 0 ? <div>+{temperatureConverter(temp)}</div>: <div>{temperatureConverter(temp)}</div>}
            {temperatureConverter(temp_min) > 0 ? <div>+{temperatureConverter(temp_min)}</div>: <div>{temperatureConverter(temp_min)}</div>}
            {temperatureConverter(temp_max) > 0 ? <div>+{temperatureConverter(temp_max)}</div>: <div>{temperatureConverter(temp_max)}</div>}
            <div>{props.weatherInfo.pressure}</div>
            <div>{props.weatherInfo.humidity}</div>*/
            }
        </div>
    )
}

export default WeatherInfo