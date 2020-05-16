import React, {useContext, useState} from 'react';

import weatherContext from '../../../contexts/weatherContext';

import DailyDetails from './DailyDetails';

const DailyForecast = () => {
    const { forecastWeather } = useContext(weatherContext);
    
    const [showDetail, setShowDetail] = useState(false);

    const detail = showDetail ? <DailyDetails /> : <></>;

    const openDetails = () => {
        setShowDetail(!showDetail);
    }

    return (
        <div>
            <p onClick={openDetails}>Daily</p>
            {detail}
        </div>
    );
}

export default DailyForecast;