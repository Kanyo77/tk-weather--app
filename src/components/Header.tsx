// Component Header hiển thị phần đầu của ứng dụng
// Gồm các thành phần:
// - Place: hiển thị vị trí hiện tại hoặc đã chọn
// - Search: tìm kiếm vị trí mới
// - Settings: thay đổi đơn vị đo & theme (light/dark)
import '../styles/components/Header.scss'
import Place from './Place'
import Search from './Search'
import Settings from './Settings'

// theme Trạng thái theme hiện tại (true/false hoặc 'light'/'dark')
// setTheme Hàm để cập nhật theme
// measurementSystem Hệ đo hiện tại
// setMeasurementSystem Hàm để cập nhật đơn vị đo
function Header({ theme, setTheme, measurementSystem, setMeasurementSystem }) {
    return (
        <div className="Header">
            {/* Hiển thị vị trí hiện tại */}
            <Place />
            {/* Ô tìm kiếm vị trí mới */}
            <Search />
            {/* Khu vực cài đặt: chuyển theme + đơn vị đo */}
            <Settings theme={theme}
                setTheme={setTheme}
                measurementSystem={measurementSystem}
                setMeasurementSystem={setMeasurementSystem}
            />
        </div>
    )
}

export default Header