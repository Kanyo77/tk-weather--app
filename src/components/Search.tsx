// Component Search cho phép người dùng tìm kiếm thành phố
// Gợi ý danh sách thành phố từ file JSON city-list.json
// Khi chọn thành phố, nó sẽ cập nhật vào context (selectedCity)
import { useEffect } from 'react';
import '../styles/components/Search.scss'
import { useState } from 'react';
import { useWeather } from '../context/weather.context';
import cities from '../api/city-list.json';

function Search() {
  // State lưu giá trị người dùng nhập vào ô tìm kiếm
  const [searchText, setSearchText] = useState('');
  // State lưu danh sách thành phố lọc ra từ file JSON
  const [filteredCities, setFilteredCities] = useState([]);
  // Hàm từ context dùng để cập nhật thành phố đang chọn
  const { setSelectedCity } = useWeather();
  // Mỗi khi searchText thay đổi, lọc danh sách thành phố
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredCities([]);
    } else {
      const results = cities.filter((item) =>
        item.city.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCities(results);
    }
  }, [searchText]);
  // Khi click vào một thành phố trong danh sách gợi ý
  function handleCityClick(cityName) {
    setSelectedCity(cityName)
  }
  // Xử lý khi người dùng nhấn Enter
  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
    }
  };

  return (
    <div className="search-container">
      {/* Icon */}
      <div className="search-icon">
        <i class="bi bi-search" ></i>
      </div>

      {/* Ô input nhập tên thành phố */}
      <div className="search-input" value={searchText}
        onChange={(e) => setSearchText(e.target.value)}>
        <input type="text" name="search-city" placeholder="Search city"
        />
      </div>

      {/* Danh sách gợi ý kết quả tìm kiếm */}
      <div className='search-results'>
        <div className='results-container'>
          {filteredCities.map((item, index) => (
            <div
              className='result' key={index} onClick={() => handleCityClick(item.city)}
            >
              {item.city}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search