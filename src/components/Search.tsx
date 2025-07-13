import { useEffect } from 'react';
import '../styles/components/Search.scss'
import { useState } from 'react';
import { useWeather } from '../context/weather.context';
import cities from '../api/city-list.json';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const { setSelectedCity } = useWeather();

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

  function handleCityClick(cityName) {
    setSelectedCity(cityName)
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
    }
  };

  return (
    <div className="search-container">
      <div className="search-icon">
        <i class="bi bi-search" ></i>
      </div>
      <div className="search-input" value={searchText}
        onChange={(e) => setSearchText(e.target.value)}>
        <input type="text" name="search-city" placeholder="Search city"
        />
      </div>

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