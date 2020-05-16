import React, { useContext } from 'react';

import weatherContext from '../../../../contexts/weatherContext';

const DailyDetails = ({ dailyWeather }) => {
    const { convertKelvinToCelsius } = useContext(weatherContext);

    return (
        <div>
            <div>
                <p>It feels like: {convertKelvinToCelsius(dailyWeather.main.feels_like)}&deg;</p>
                <p>Minimum temperature: {convertKelvinToCelsius(dailyWeather.main.temp_min)}&deg;</p>
                <p>Maximum temperature: {convertKelvinToCelsius(dailyWeather.main.temp_max)}&deg;</p>
            </div>
            <div>
                <p>Humidity: {dailyWeather.main.humidity}%</p>
                <p>Wind speed: {dailyWeather.wind.speed}</p>
                <p>Description: {dailyWeather.weather[0].description}</p>
            </div>
        </div>
    );
}

export default DailyDetails;