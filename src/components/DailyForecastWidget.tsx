// Component hiển thị dự báo thời tiết theo ngày (daily forecast)
// Lấy dữ liệu từ file JSON mock (daily-forecast.json)
// Hiển thị: ngày, biểu tượng thời tiết, nhiệt độ cao/thấp, và lượng mưa

import WeatherIcon from './WeatherIcon'
import hourlyforecast from '../api/daily-forecast.json'
import { useWeather } from '../context/weather.context';
import { UNITS } from '../constants';

function DailyForecastWidget() {
    // Lấy hàm viewElement và loadCurrentWeather từ context (chưa dùng ở đây)
    const { viewElement, loadCurrentWeather } = useWeather();

    // Lấy hệ đo hiện tại (metric/imperial) từ context
    const { measurementSystem } = useWeather();
    const units = UNITS[measurementSystem] || UNITS.metric;
    return (
        <div className="widget-container">
            {/* Lặp qua từng ngày trong dữ liệu dự báo để hiển thị */}
            {hourlyforecast.daily.data.map((item, index) => (
                <div className="widget" key={index}>
                    {/* Hiển thị "today" nếu là ngày hôm nay, ngược lại hiển thị ngày/tháng */}
                    <div className="day">
                        {new Date().getDate() === new Date(item.day).getDate() ?

                            <div >today</div> :
                            <div> {new Date(item.day).getDate()}/{new Date(item.day).getMonth() + 1}</div>}
                    </div>
                     {/* Biểu tượng thời tiết và nhiệt độ cao */}
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