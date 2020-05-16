import React, { useContext } from 'react';
import styles from './ForecastWeather.module.scss';

import WeatherContext from '../../contexts/weatherContext';

import DailyForecast from './DailyForecast';

const ForecastWeather = () => {
    const { forecastWeather } = useContext(WeatherContext);

    return (
        <section className={styles.forecast}>
            <div>
                <p>Click on each to see more detail.</p>
            </div>
            <article>
                {
                    forecastWeather
                        ? forecastWeather.map((daily, index) => {
                            return <DailyForecast dailyWeather={daily} key={index} />
                        })
                        : <></>
                }
            </article>
        </section>
    );
}

export default ForecastWeather;