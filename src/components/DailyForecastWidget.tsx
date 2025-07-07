import WeatherIcon from './WeatherIcon'
import hourlyforecast from '../api/daily-forecast.json'

function DailyForecastWidget(){
    return(
         <div className="widget-container">
                   {hourlyforecast.daily.data.map((item, index) => (
                       
                        <div className="widget" key={index}>  
                   <div className="day">
    { new Date().getDate() === new Date(item.day).getDate() ? 
    
    <div >today</div> : 
    <div> {new Date(item.day).getDate()}/{new Date(item.day).getMonth() + 1}</div> }
                   </div>
                     <div className="icon-temp">
                        <div className="icon">
                           <WeatherIcon iconNumber={item.icon} />
                        </div>
                      <div className="temperature_max">
                         {Math.round(item.temperature_max)} oC</div>
                     </div>
                      <div className="temperature_min">{Math.round(item.temperature_min)} oC</div>
       

                      <div className="wind">{item.precipitation.total} mph </div>
                      
                      </div>
                   ))}
            
               </div>
    )
}

export default DailyForecastWidget