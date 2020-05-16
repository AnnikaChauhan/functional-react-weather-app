import React, {useContext} from 'react';

import WeatherContext from '../../contexts/weatherContext';

import DailyForecast from './DailyForecast';

const ForecastWeather = () => {
    const { forecastWeather } = useContext(WeatherContext);

    return ( 
        <div>
            <p>This Weeks Forecast...</p>
            <small>Click on each to see more detail.</small>
            {
                forecastWeather
                ? forecastWeather.map((daily, index) => {
                    return <DailyForecast dailyWeather={daily} key={index} />
                })
                : <></>
            }
        </div>
     );
}
 
export default ForecastWeather;