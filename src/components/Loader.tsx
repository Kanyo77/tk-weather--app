// Component Loader hiển thị thanh loading (dạng thanh ngang dài)
// Được sử dụng khi dữ liệu chưa được load hoàn tất 
import '../styles/components/Loader.scss'

function Loader() {
    return (
        <div className="Loader">
            <div className="loader" style={{ width: '1500px', }}></div>
        </div>

    )
}

export default Loader