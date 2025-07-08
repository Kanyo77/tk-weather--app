import { useWeather } from '../context/weather.context';

function Place(){
    const { selectedCity } = useWeather();
    return(
        <div className="Place">       
            <i class="bi bi-geo-alt"></i>   

            <b> {selectedCity || 'Hồ Chí Minh'}</b>
        </div>
    )
}

export default Place