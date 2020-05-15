import React, { useContext, useEffect } from 'react';

import WeatherContext from '../../contexts/weatherContext';

const CurrentWeather = () => {
    const weatherContext = useContext(WeatherContext);

    const handleChange = (e) => {
        weatherContext.setCity(e.target.value);
        console.log(weatherContext.city);
    }

    // useEffect(weatherContext.fetchWeather, []);
    console.log(weatherContext);

    //handleSubmit to refetch

    return (
        <div>
            <input type='text' value={weatherContext.city} onChange={handleChange} placeholder='Search City' />
            <p>Current Weather in {weatherContext.city}</p>
        </div>
        
    );
}

export default CurrentWeather;