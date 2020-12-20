import React from 'react'
import * as axios from 'axios'
import WeatherInfoC from "./WeatherInfoC";

export class WeatherForm extends React.Component {
    constructor() {
        super();

        this.state = {
            search: '',
            city: null,
            temp: null,
            temp_min: null,
            temp_max: null,
            pressure: null,
            country: null

        }
    }

    onChangeHandler = (e) => {
        this.setState({search: e.target.value})
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&appid=04fbd09dfff38bda103004c4674e1773`)
            .then(res => {
                this.setState({
                    city: this.state.search,
                    temp: res.data.main.temp,
                    temp_min: res.data.main.temp_min,
                    temp_max: res.data.main.temp_max,
                    pressure: res.data.main.pressure,
                    humidity: res.data.main.humidity,
                    country: res.data.sys.country,
                })
                this.setState({search: ''})
                console.log(res)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler} style={{marginTop: 30}}>
                    <input type="text" value={this.state.search} onChange={this.onChangeHandler}/>
                    <button type='submit'>search</button>
                </form>
                {this.state.temp
                    ?
                    <WeatherInfoC weatherInfo={{...this.state}}/>
                    :
                    <p>Enter data</p>
                }
            </div>
        )
    }
}