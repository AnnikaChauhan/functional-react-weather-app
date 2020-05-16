import React, {useContext, useState} from 'react';

import WeatherContext from '../../contexts/weatherContext';

const ForecastWeather = () => {
    const weatherContext = useContext(WeatherContext);

    const [showDetail, setShowDetail] = useState(false);

    const detail = showDetail ? <p>Make this it's own component - with props of forecast weather details</p> : <></>;

    const openDetails = () => {
        setShowDetail(!showDetail);
    }
    
    console.log(weatherContext);

    return ( 
        <div>
            <p onClick={openDetails}>Forecast Weather</p>
            {detail}
        </div>
        

     );
}
 
export default ForecastWeather;