// Component App là root của toàn bộ ứng dụng
// Chứa state toàn cục cho:
// - Theme (light / dark) => lưu trong localStorage với key 'app_theme'
// - Measurement System (auto / metric / imperial) => lưu trong localStorage với key 'measurementSystem'
// Đồng thời App cũng kết hợp Header và Main để render nội dung chính
import { useState, useEffect } from "react";
import Header from './components/Header'
import Main from './components/Main'
import './styles/components/App.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { MEASUREMENT_SYSTEMS } from './constants';
function App() {

  const THEME_KEY = 'app_theme';
  // Đơn vị đo: metric / imperial / auto (được load từ localStorage)
  const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.AUTO);

  // ===== Theme Logic =====

  // Lưu theme vào localStorage mỗi khi thay đổi
  const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  };
  // Tải theme từ localStorage khi ứng dụng khởi động
  const loadThemeFromLocalStorage = () => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    return storedTheme ? JSON.parse(storedTheme) : true;
  };

  const [theme, setTheme] = useState(loadThemeFromLocalStorage());

  // Mỗi khi theme thay đổi, lưu vào localStorage
  useEffect(() => {
    saveThemeToLocalStorage(theme);
  }, [theme]);

  // ===== Measurement Logic =====

  // Load measurement system từ localStorage khi khởi động
  useEffect(() => {
    const savedSystem = localStorage.getItem('measurementSystem');
    if (savedSystem) {
      setMeasurementSystem(savedSystem);
    }
  }, []);

  // Mỗi khi measurement system thay đổi, lưu lại
  useEffect(() => {
    localStorage.setItem('measurementSystem', measurementSystem);
  }, [measurementSystem]);

  // ===== Render giao diện chính =====

  return (
    <div className={`App-${theme ? 'dark' : 'light'}`}>
      {/* Header: chứa chức năng đổi theme & đơn vị đo */}
      <Header theme={theme} setTheme={setTheme} measurementSystem={measurementSystem}
        setMeasurementSystem={setMeasurementSystem} />
      {/* Main: hiển thị thời tiết hiện tại và dự báo */}
      <Main measurementSystem={measurementSystem} />

    </div>
  )
}

export default App
