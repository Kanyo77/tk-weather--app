import React, { useEffect, useState } from 'react';
import '../styles/components/Main.scss'
import '../styles/components/CurrentWeather.scss'

import WeatherIcon from './WeatherIcon'
import { useWeather } from '../context/weather.context';

function CurrentWheather(){
       const { currentData, selectedTime } = useWeather();
        // const render = () => {
        //   ren = {currentData.icon_num}
        // }
      if (!currentData) {
    return <div>Loading...</div>; // tránh lỗi undefined khi chưa có data
  }
          return(
          // <div className="summary">{currentData.summary}</div>


          <div className="CurrentWeather" >         
            <div className="temperature">
            <div>
               <div className="weather-icon" >                     
                  <WeatherIcon iconNumber={currentData.icon} />
               </div>
               <div className="value">
                   <div className='real'> {Math.round(currentData.temperature)}oC</div>
                  <div className='feels_like'>{Math.round(currentData.feels_like)} oC </div>
                    {/* <div className='summary'>{currentweather.current.summary} </div> */}

                    <div className='summary'>{currentData.summary} </div>

               </div>
            </div>       
             </div>
    
            <div className="other-infos"> 

                <div className='widget'>
                  <div className='widget-container'>       
                  <div className='info'>
                      <div className='icon'><i className='bi bi-droplet'></i></div>
                      <div className='value'>{currentData.precipitation.type} mm/h</div>
                  </div>
                  <div className='name'>precipitation</div>
                  </div>
                </div>

                 <div className='widget'>
                  <div className='widget-container'>       
                  <div className='info'>
                      <div className='icon'><i className='bi bi-wind'></i></div>
                      <div className='value'>
                        {currentData.wind.speed} mph
                         </div>
                  </div>
                 <div className='name'>wind speed</div>
                  </div>
                </div>

                 <div className='widget'>
                  <div className='widget-container'>       
                  <div className='info'>
                      <div className='icon'><i className='bi bi-moisture'></i></div>
                      <div className='value'>{currentData.humidity} %</div>
                  </div>
                 <div className='name'>humidity</div>
                  </div>
                </div>

                 <div className='widget'>
                  <div className='widget-container'>       
                  <div className='info'>
                      <div className='icon'><i className='bi bi-sunglasses'></i></div>
                      {currentData.uv_index}
                  </div>
                 <div className='name'>
               uv index</div>                  
                  </div>
                </div>
                                 <div className='widget'>
                  <div className='widget-container'>       
                  <div className='info'>
                      <div className='icon'><i className='bi bi-clouds-fill'></i></div>
                      <div className='value'> {currentData.uv_index} %</div>
                  </div>
                 <div className='name'>cloud cover</div>
                  </div>
                </div>
              <div className='widget'>
                  <div className='widget-container'>       
                  <div className='info'>
                      <div className='icon'><i className='bi bi-eye'></i></div>
                      <div className='value'>
                        {currentData.visibility} ml</div>
                  </div>
                <div className='name'>visibility</div>
                  </div>
                </div>

            </div>          
          </div>
        )
}

export default CurrentWheather