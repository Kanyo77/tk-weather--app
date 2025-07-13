// File entry chính để khởi tạo ứng dụng React
// App được bọc trong:
// - <StrictMode>: hỗ trợ phát hiện lỗi tiềm ẩn khi dev
// - <WeatherProvider>: context toàn cục cho dữ liệu thời tiết
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WeatherProvider } from './context/weather.context';
import App from './App.tsx'

// Khởi tạo root React và render vào thẻ #root trong index.html
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>,
)
