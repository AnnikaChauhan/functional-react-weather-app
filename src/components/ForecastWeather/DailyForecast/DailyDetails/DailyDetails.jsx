import React, { useContext } from 'react';
import styles from './DailyDetails.module.scss';

import weatherContext from '../../../../contexts/weatherContext';

const DailyDetails = ({ dailyWeather }) => {
    const { convertKelvinToCelsius } = useContext(weatherContext);

    return (
        <div className={styles.details}>
            <div>
                <p>Feels like: <span>{convertKelvinToCelsius(dailyWeather.main.feels_like)}&deg;</span></p>
                <p>Min temperature: <span>{convertKelvinToCelsius(dailyWeather.main.temp_min)}&deg;</span></p>
                <p>Max temperature: <span>{convertKelvinToCelsius(dailyWeather.main.temp_max)}&deg;</span></p>
            </div>
            <div>
                <p>Humidity: <span>{dailyWeather.main.humidity}%</span></p>
                <p>Wind speed: <span>{dailyWeather.wind.speed}mph</span></p>
                <p>Description: <span>{dailyWeather.weather[0].description}</span></p>
            </div>
        </div>
    );
}

export default DailyDetails;