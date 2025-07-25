import { useEffect } from "react";

import WeatherIcon from './WeatherIcon'
import hourlyforecast from '../api/hourly-forecast.json'
import { useWeather } from '../context/weather.context';
import { UNITS } from '../constants';
function HourlyForecastWidget({ data }) {
    const { viewElement, loadCurrentWeather } = useWeather();
    const { measurementSystem } = useWeather();
    const units = UNITS[measurementSystem] || UNITS.metric;
    data;
    
    const wheatherday = () => {
        var today = new Date();
        var time = today.getHours()
    }
    const handleClick = (evt) => {
        viewElement(evt);
    }

    useEffect(() => {
        wheatherday();
    }, []);

    return (
        <div className="widget-container">
            {hourlyforecast.hourly.data.map((item, index) => (

                <div className="widget" key={index} onClick={handleClick}>
                    <div className="day">
                        {new Date().getHours() === new Date(item.date).getHours() ? <div >now</div> : <div></div>}
                    </div>
                    <div className="time" >
                        {new Date(item.date).getHours()}:{new Date(item.date).getMinutes()}
                    </div>
                    <div className="icon-temp">
                        <div className="icon">
                            <WeatherIcon iconNumber={item.icon} />
                        </div>
                        <div className="temperature">{item.temperature} {units.temperature}</div>
                    </div>
                    <div className="precipitation">{item.precipitation.total} {units.precipitation}</div>
                    <div className="wind">
                        <div className="wind" >{item.wind.speed} {units.wind_speed}
                            <div className="dir" style={{ transform: `rotate(${-45 + item.wind.angle}deg)` }}>
                                <i className="bi bi-send-fill"></i></div></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default HourlyForecastWidget