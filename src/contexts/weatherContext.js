import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
    const [currentWeather, setCurrentWeather] = useState({});

    return ( 
        <WeatherContext.Provider>
            {props.children}
        </WeatherContext.Provider>
     );
}
 
export default WeatherContext;