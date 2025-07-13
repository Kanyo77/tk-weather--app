import WeatherIcon from './WeatherIcon'
import hourlyforecast from '../api/daily-forecast.json'
import { useWeather } from '../context/weather.context';
import { UNITS } from '../constants';

function DailyForecastWidget() {
    const { viewElement, loadCurrentWeather } = useWeather();
    const { measurementSystem } = useWeather();
    const units = UNITS[measurementSystem] || UNITS.metric;
    return (
        <div className="widget-container">
            {hourlyforecast.daily.data.map((item, index) => (
                <div className="widget" key={index}>
                    <div className="day">
                        {new Date().getDate() === new Date(item.day).getDate() ?

                            <div >today</div> :
                            <div> {new Date(item.day).getDate()}/{new Date(item.day).getMonth() + 1}</div>}
                    </div>
                    <div className="icon-temp">
                        <div className="icon">
                            <WeatherIcon iconNumber={item.icon} />
                        </div>
                        <div className="temperature_max">
                            {Math.round(item.temperature_max)} {units.temperature}</div>
                    </div>
                    <div className="temperature_min">{Math.round(item.temperature_min)} {units.temperature}</div>
                    <div className="wind">{item.precipitation.total} {units.precipitation} </div>
                </div>
            ))}
        </div>
    )
}

export default DailyForecastWidget