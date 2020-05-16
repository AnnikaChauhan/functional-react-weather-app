import React, {useContext} from 'react';

import weatherContext from '../../../../contexts/weatherContext';

const DailyDetails = () => {
    const { forecastWeather } = useContext(weatherContext);

    return ( 
        <p>Details</p>
     );
}
 
export default DailyDetails;