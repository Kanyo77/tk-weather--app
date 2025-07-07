import { createContext, useState, useContext,useEffect } from 'react';
import { getWeatherData } from '../api';
import {
  DEFAULT_PLACE,
  MEASUREMENT_SYSTEMS,
  UNITS,
} from '../constants';
import hourlyForecast from '../api/hourly-forecast.json';

const WeatherContext = createContext(); 

function WeatherProvider({ children }){

      const [place, setPlace] = useState(DEFAULT_PLACE);
     const [selectedTime, setSelectedTime] = useState(null);
      const [currentData, setCurrentData] = useState(null);

    const viewElement = (evt) =>{
      const widget = evt.currentTarget;

    const timeElement = widget.querySelector('.time');

    if (timeElement) {
      setSelectedTime(timeElement.innerText)
       console.log('Giá trị time:', timeElement.innerText);
    }

     useEffect(() => {
        if (selectedTime !== null) {
            loadCurrentWeather();
        }
    }, [selectedTime]);

    }
    const loadCurrentWeather = () => {
        let targetHour;

        if (selectedTime === null) {
            targetHour = new Date().getHours(); // Nếu chưa click, load giờ hiện tại
        } else {
            const [hourStr] = selectedTime.split(':');
            targetHour = parseInt(hourStr);
        }

        const foundData = hourlyForecast.hourly.data.find(item =>
            new Date(item.date).getHours() === targetHour
        );

        if (foundData) {
            setCurrentData(foundData);
            console.log(foundData)
            console.log('co')
        }else
        {
          console.log('ko')
        }
    
    }

    return(
           <WeatherContext.Provider value={{ setPlace,viewElement,loadCurrentWeather, selectedTime, currentData  }}>
                {children}            
           </WeatherContext.Provider>

    )

}

export { WeatherProvider };
export default WeatherContext;

export const useWeather = () => useContext(WeatherContext);