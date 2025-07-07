import '../styles/components/Forecast.scss'
import DailyForecastWidget from './DailyForecastWidget'
import HourlyForecastWidget from './HourlyForecastWidget'
import HorizontallyScrollable from './HorizontallyScrollable'

// import themecontext from '../context/themecontext'

// {title,type,data}
function Focast({title,type,data}){
    return(
        
        <div  className="Forecast">
             <div className='forecast-container'>
                 <h1>Hourly Forecast</h1>
                  <HorizontallyScrollable className='widget-container'> 
                          <div className="forecast-container"><HourlyForecastWidget/></div>
                     </HorizontallyScrollable>
             </div>

          <div className='forecast-container'>
                 <h1>21 DAYS FORECAST</h1>
                     <HorizontallyScrollable className='widget-container'> 
                 <div className="forecast-container"><DailyForecastWidget/></div>
                 </HorizontallyScrollable>
             </div>   
                    </div>
                
  
    )
}

export default Focast