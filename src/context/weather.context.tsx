// Context: WeatherContext
// Mục tiêu: Chia sẻ global state liên quan đến thời tiết trong toàn bộ ứng dụng
import { createContext, useState, useContext, useEffect } from 'react';
import { DEFAULT_PLACE, } from '../constants';
import hourlyForecast from '../api/hourly-forecast.json';

// Tạo context lưu trữ dữ liệu thời tiết
const WeatherContext = createContext();

//Provider bọc quanh App để cung cấp các state liên quan đến thời tiết:
// - selectedCity: thành phố người dùng chọn (lưu vào localStorage)
// - selectedTime: thời gian giờ người dùng chọn (dùng cho hiển thị dữ liệu cụ thể)
// - currentData: dữ liệu thời tiết hiện tại (theo giờ)
// - place: thông tin địa điểm 
function WeatherProvider({ children }) {

  const [place, setPlace] = useState(DEFAULT_PLACE);

  // Thời gian được chọn (theo giờ)
  const [selectedTime, setSelectedTime] = useState(null);

  // Dữ liệu thời tiết tương ứng với thời gian được chọn
  const [currentData, setCurrentData] = useState(null);

  // Thành phố được chọn (lưu vào localStorage để giữ trạng thái sau reload)
  const [selectedCity, setSelectedCity] = useState(() => {
    const saved = localStorage.getItem('selectedCity');
    return saved ? JSON.parse(saved) : null;
  });

  // Lưu selectedCity vào localStorage khi thay đổi
  useEffect(() => {
    if (selectedCity) {
      localStorage.setItem('selectedCity', JSON.stringify(selectedCity));
    }
  }, [selectedCity]);

  /**
  * Xử lý khi người dùng click vào 1 widget (dự báo giờ)
  * => lấy thời gian từ `.time`, lưu vào selectedTime
  */
  const viewElement = (evt: React.MouseEvent<HTMLDivElement>) => {
    const widget = evt.currentTarget;
    const timeElement = widget.querySelector('.time');

    if (timeElement) {
      const timeValue = timeElement.textContent || '';
      setSelectedTime(timeValue);
    }
  };

  /**
  * Mỗi khi selectedTime thay đổi
  * => tìm dữ liệu thời tiết tương ứng trong `hourlyForecast`
  * => cập nhật currentData
  */
  useEffect(() => {
    const hour = selectedTime === null
      ? new Date().getHours()
      : parseInt(selectedTime.split(':')[0]);

    const matched = hourlyForecast.hourly.data.find(item =>
      new Date(item.date).getHours() === hour
    );

    if (matched) {
      setCurrentData(matched);
    }
  }, [selectedTime]);

  return (
    <WeatherContext.Provider value={{
      setPlace, viewElement, selectedTime, currentData,
      selectedCity,
      setSelectedCity,
    }}>
      {children}
    </WeatherContext.Provider>

  )

}

export { WeatherProvider };
export default WeatherContext;
// Hook để dùng context
export const useWeather = () => useContext(WeatherContext);