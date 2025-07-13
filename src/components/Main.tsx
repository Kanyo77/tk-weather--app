// Component Main là vùng nội dung chính của ứng dụng thời tiết
// - CurrentWeather: hiển thị thời tiết hiện tại
// - Forecast: hiển thị dự báo thời tiết
import '../styles/components/Main.scss'
import CurrentWheather from './CurrentWheather'
import Focast from './Focast'
function Main({ measurementSystem }) {

  return (
    <div className="Main">
      {/* Thời tiết hiện tại */}
      <CurrentWheather />
      {/* Dự báo thời tiết theo giờ và theo ngày */}
      <Focast />
    </div>
  )
}

export default Main