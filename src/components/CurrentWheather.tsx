// Hiển thị thông tin thời tiết hiện tại bao gồm:
// - Nhiệt độ thực tế và cảm nhận
// - Tóm tắt trạng thái thời tiết (summary)
// - Các thông tin khác: mưa, gió, độ ẩm, UV, mây, tầm nhìn

import '../styles/components/Main.scss'
import Loader from './Loader'
import '../styles/components/CurrentWeather.scss'
import WeatherIcon from './WeatherIcon'
import { useWeather } from '../context/weather.context';
import { UNITS } from '../constants';

function CurrentWheather() {
  // Lấy đơn vị đo hiện tại từ context , nếu không có mặt định sẽ là metric
  const { measurementSystem } = useWeather();
  const units = UNITS[measurementSystem] || UNITS.metric;

  // Lấy dữ liệu thời tiết hiện tại và thời điểm đang chọn
  const { currentData, selectedTime } = useWeather();
  // Nếu chưa có dữ liệu, hiển thị thông báo Loading
  if (!currentData) {
    return <Loader />
    //<div>Loading...</div>;
  }
  return (

    <div className="CurrentWeather" >
      {/* Phần hiển thị nhiệt độ và icon*/}
      <div className="temperature">
        <div>
          <div className="weather-icon" >
            <WeatherIcon iconNumber={currentData.icon} />
          </div>
          <div className="value">
            <div className='real'> {Math.round(currentData.temperature)} {units.temperature}</div>
            <div className='feels_like'>{Math.round(currentData.feels_like)} {units.temperature}</div>
            <div className='summary'>{currentData.summary} </div>
          </div>
        </div>
      </div>

      <div className="other-infos">
        {/* Các chỉ số thời tiết khác */}
        <div className='widget'>
          <div className='widget-container'>
            <div className='info'>
              <div className='icon'><i className='bi bi-droplet'></i></div>
              <div className='value'>{currentData.precipitation.type} {units.precipitation}</div>
            </div>
            <div className='name'>precipitation</div>
          </div>
        </div>

        <div className='widget'>
          <div className='widget-container'>
            <div className='info'>
              <div className='icon'><i className='bi bi-wind'></i></div>
              <div className='value'>
                {currentData.wind.speed}  {units.wind_speed}
              </div>
            </div>
            <div className='name'>wind speed</div>
          </div>
        </div>

        <div className='widget'>
          <div className='widget-container'>
            <div className='info'>
              <div className='icon'><i className='bi bi-moisture'></i></div>
              <div className='value'>{currentData.humidity} {units.humidity}</div>
            </div>
            <div className='name'>humidity</div>
          </div>
        </div>

        <div className='widget'>
          <div className='widget-container'>
            <div className='info'>
              <div className='icon'><i className='bi bi-sunglasses'></i></div>
              {currentData.uv_index} {units.uv_index}
            </div>
            <div className='name'>
              uv index</div>
          </div>
        </div>
        <div className='widget'>
          <div className='widget-container'>
            <div className='info'>
              <div className='icon'><i className='bi bi-clouds-fill'></i></div>
              <div className='value'> {currentData.cloud_cover} {units.cloud_cover}</div>
            </div>
            <div className='name'>cloud cover</div>
          </div>
        </div>
        <div className='widget'>
          <div className='widget-container'>
            <div className='info'>
              <div className='icon'><i className='bi bi-eye'></i></div>
              <div className='value'>
                {currentData.visibility} {units.visibility}</div>
            </div>
            <div className='name'>visibility</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CurrentWheather