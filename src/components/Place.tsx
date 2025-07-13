// Component Place hiển thị vị trí hiện tại hoặc mặc định của người dùng
// Lấy dữ liệu từ weather context (`selectedCity`)
// Nếu không có `selectedCity`, mặc định hiển thị "Hồ Chí Minh"
import { useWeather } from '../context/weather.context';

function Place() {
    // Lấy thông tin thành phố đã chọn từ context
    const { selectedCity } = useWeather();
    return (
        <div className="Place">
            {/* Biểu tượng định vị */}
            <i class="bi bi-geo-alt"></i>
            {/* Hiển thị tên thành phố hoặc mặc định là "Hồ Chí Minh" */}
            <b> {selectedCity || 'Hồ Chí Minh'}</b>
        </div>
    )
}
export default Place