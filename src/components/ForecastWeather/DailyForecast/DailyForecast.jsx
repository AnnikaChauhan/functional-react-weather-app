import React, { useContext, useState } from 'react';

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
        <div>
            <div onClick={openDetails}>
                <p>{utcToDay(dailyWeather.dt)}</p>
                <p>{convertKelvinToCelsius(dailyWeather.main.temp)}</p>
            </div>
            {detail}
        </div>
    );
}

export default DailyForecast;