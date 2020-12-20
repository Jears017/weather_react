import React from 'react'
import './App.css';
import {WeatherForm} from "./components/WeatherForm";

const App = () => {
    return (
        <div className='main'>
            <div className="main_content">
                <WeatherForm/>
            </div>
        </div>
    );
}

export default App;
