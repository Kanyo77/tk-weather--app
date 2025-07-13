import { createContext, useState, useContext, useEffect } from 'react';
import { DEFAULT_PLACE, } from '../constants';
import hourlyForecast from '../api/hourly-forecast.json';
const WeatherContext = createContext();

function WeatherProvider({ children }) {

  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentData, setCurrentData] = useState(null);

  const [selectedCity, setSelectedCity] = useState(() => {
    const saved = localStorage.getItem('selectedCity');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (selectedCity) {
      localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
    }
  }, [selectedCity]);

  const viewElement = (evt: React.MouseEvent<HTMLDivElement>) => {
    const widget = evt.currentTarget;
    const timeElement = widget.querySelector('.time');

    if (timeElement) {
      const timeValue = timeElement.textContent || '';
      setSelectedTime(timeValue);
    }
  };

  useEffect(() => {
    const hour = selectedTime === null
      ? new Date().getHours()
      : parseInt(selectedTime.split(':')[0]);

    const matched = hourlyForecast.hourly.data.find(item =>
      new Date(item.date).getHours() === hour
    );

    if (matched) {
      setCurrentData(matched);
    }
  }, [selectedTime]);

  return (
    <WeatherContext.Provider value={{
      setPlace, viewElement, selectedTime, currentData,
      selectedCity,
      setSelectedCity,
    }}>
      {children}
    </WeatherContext.Provider>

  )

}

export { WeatherProvider };
export default WeatherContext;

export const useWeather = () => useContext(WeatherContext);