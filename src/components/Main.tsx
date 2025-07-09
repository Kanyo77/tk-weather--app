import React from "react";
import '../styles/components/Main.scss'
import { useContext } from 'react';
import CurrentWheather from './CurrentWheather'
// import WeatherContext from '../context/weather.context';
import Loader from './Loader'
import Focast from './Focast'
function Main({ measurementSystem }){

  return(
    <div className="Main">
          {/* <Loader/> */}
        <CurrentWheather/>
        <Focast />
    </div>

  )
}

export default Main