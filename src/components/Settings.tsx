// Component Settings quản lý phần cài đặt ứng dụng:
// - Chuyển đổi giữa light/dark theme
// - Thay đổi hệ đơn vị đo (auto, metric, imperial)
import { useState } from "react";
import '../styles/components/Settings.scss';
import { MEASUREMENT_SYSTEMS } from '../constants'

function Settings({ theme, setTheme, measurementSystem, setMeasurementSystem }) {
    // Đơn vị hiện tại (state cục bộ, đơn vị)

    // Trạng thái mở/tắt menu settings
    const [currentSystem, setCurrentSystem] = useState('auto');
    const [opensetting, setOpensetting] = useState(false);

    // Hàm chuyển đổi giữa light và dark theme
    const toggleTheme = () => {
        setTheme((prevtheme) => !prevtheme);
    }
    // Hàm mở/đóng menu chọn đơn vị đo
    const changeMeasuremen = () => {
        setOpensetting((prevOpensetting) => !prevOpensetting);
    }
    // Hàm đổi đơn vị đo
    const changeUnits = (system) => {
        setMeasurementSystem(system);
    }

    return (
        <div className="Settings">
            {/* Nút chọn theme sáng/tối */}
            <div className="theme-toggler">
                <div className={`theme-buttons`} onClick={toggleTheme}>

                    <div className={`light-theme-btn ${theme ? '' : 'active'}`}>
                        <i className="bi bi-sun"></i>
                    </div>

                    <div className={`dark-theme-btn ${theme ? 'active' : ''}`}>
                        <i className="bi bi-moon"></i>
                    </div>

                </div>
            </div>

            {/* Nút mở menu cài đặt đơn vị đo */}
            <div className='settings-btn' onClick={changeMeasuremen}>
                <i className={`bi bi-gear${opensetting ? '-fill' : ''}`}></i>
            </div>
            <div className={`settings-menu ${opensetting ? 'open' : ''}`}>

                <div className='measurement-systems'>
                    <h4>Measurement Systems:</h4>
                    <div className='systems'>
                        {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
                            <div className={`system ${system === measurementSystem ? 'active' : ''
                                }`}
                                key={system}
                                onClick={() => changeUnits(system)}
                            >
                                {system}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
