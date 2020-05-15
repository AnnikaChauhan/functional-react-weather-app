import React from 'react';
import styles from './App.module.scss';

import { WeatherContextProvider } from '../../contexts/weatherContext';

import CurrentWeather from '../../components/CurrentWeather';
import ForecastWeather from '../../components/ForecastWeather';

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Weather App</h1>
      <WeatherContextProvider>
        <CurrentWeather />
        <ForecastWeather />
      </WeatherContextProvider>


    </div>
  );
}

export default App;