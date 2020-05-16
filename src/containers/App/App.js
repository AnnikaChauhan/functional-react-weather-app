import React from 'react';
import styles from './App.module.scss';

import { WeatherContextProvider } from '../../contexts/weatherContext';

import CurrentWeather from '../../components/CurrentWeather';
import ForecastWeather from '../../components/ForecastWeather';

const App = () => {
  return (
    <section className={styles.App}>
      <WeatherContextProvider>
        <CurrentWeather />
        <ForecastWeather />
      </WeatherContextProvider>
    </section>
  );
}

export default App;