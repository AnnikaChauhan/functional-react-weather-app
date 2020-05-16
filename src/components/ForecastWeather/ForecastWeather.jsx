import React, {useContext, useState} from 'react';

import WeatherContext from '../../contexts/weatherContext';

import DailyForecast from './DailyForecast';

const ForecastWeather = () => {
    const { forecastWeather } = useContext(WeatherContext);

    return ( 
        <div>
            <p>This Weeks Forecast...</p>
            <DailyForecast />
        </div>
     );
}
 
export default ForecastWeather;