import React, { useContext } from 'react';
import styles from './CurrentWeather.module.scss';

import WeatherContext from '../../contexts/weatherContext';

const CurrentWeather = () => {
    const {city, setCity, fetchWeather, currentWeather, convertKelvinToCelsius} = useContext(WeatherContext);

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    }

    return (
        <div className={styles.container}>
            <form>
                <input type='text' value={city} onChange={handleChange} placeholder='Search City' />
                <input type='submit' value='Go' onClick={handleSubmit}/>
            </form>
            {
                currentWeather
                ? <p>{convertKelvinToCelsius(currentWeather.main.temp)}&deg;</p>
                : <p></p>
            }
        </div>

    );
}

export default CurrentWeather;