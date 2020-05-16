import React, { useContext, useState } from 'react';
import styles from './DailyForecast.module.scss';

import weatherContext from '../../../contexts/weatherContext';

import DailyDetails from './DailyDetails';

const DailyForecast = ({ dailyWeather }) => {
    const { convertKelvinToCelsius } = useContext(weatherContext);

    const [showDetail, setShowDetail] = useState(false);

    const detail = showDetail ? <DailyDetails dailyWeather={dailyWeather} /> : <></>;

    const openDetails = () => {
        setShowDetail(!showDetail);
    }

    const utcToDay = (utc) => {
        let utcDate = new Date(utc * 1000);
        let date = utcDate.toGMTString();
        let day = date.substring(0, 3);
        return day;
    }

    return (
        <section onClick={openDetails} className={styles.daily}>
            <section>
                <article>
                    <p>{utcToDay(dailyWeather.dt)}</p>
                    <p>{convertKelvinToCelsius(dailyWeather.main.temp)}&deg;</p>
                </article>
                <article>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${dailyWeather.weather[0].icon}@2x.png`} alt={dailyWeather.weather[0].description} />
                    </div>
                </article>
            </section>
            {detail}
        </section>
    );
}

export default DailyForecast;