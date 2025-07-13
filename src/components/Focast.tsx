// Component Forecast hiển thị 2 phần:
// 1. Dự báo theo giờ (HourlyForecastWidget)
// 2. Dự báo theo ngày (DailyForecastWidget)
// Dùng HorizontallyScrollable để có thể scroll ngang
import '../styles/components/Forecast.scss'
import DailyForecastWidget from './DailyForecastWidget'
import HourlyForecastWidget from './HourlyForecastWidget'
import HorizontallyScrollable from './HorizontallyScrollable'

function Focast() {
    return (

        <div className="Forecast">
            {/* Khối dự báo theo giờ */}
            <div className='forecast-container'>
                <h1>Hourly Forecast</h1>
                <HorizontallyScrollable className='widget-container'>
                    <div className="forecast-container"><HourlyForecastWidget /></div>
                </HorizontallyScrollable>
            </div>
              {/* Khối dự báo 21 ngày tiếp theo */}   
            <div className='forecast-container'>
                <h1>21 DAYS FORECAST</h1>
                <HorizontallyScrollable className='widget-container'>
                    <div className="forecast-container"><DailyForecastWidget /></div>
                </HorizontallyScrollable>
            </div>
        </div>


    )
}

export default Focast