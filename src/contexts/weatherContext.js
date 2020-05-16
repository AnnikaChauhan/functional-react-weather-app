import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
    const [city, setCity] = useState('London');
    const [appid] = useState('0a30e476b278414999f2fa1f9e2e6e38')
    const [currentWeather, setCurrentWeather] = useState('');
    const [forecastWeather, setForecastWeather] = useState('');

    const convertKelvinToCelsius = (kelvin) => {
        let celsius = kelvin - 273.15;
        celsius = Number.parseFloat(celsius).toFixed(0);
        return celsius;
    };

    const fetchWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
            .then(response => response.json())
            .then(data => {
                setCurrentWeather(data);
            })
            .catch(error => console.log(error));
    };

    useEffect(fetchWeather, []);

    return ( 
        <WeatherContext.Provider value={{city, setCity, currentWeather, convertKelvinToCelsius, fetchWeather}}>
            {props.children}
        </WeatherContext.Provider>
     );   
}
 
export default WeatherContext;