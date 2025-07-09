import React from "react";
import '../styles/components/Header.scss'
import Place from './Place'
import Search from './Search'
import Settings from './Settings'
function Header({ theme, setTheme,measurementSystem,setMeasurementSystem }){
    return(
        <div  className="Header">
            <Place/>
            <Search/>
            <Settings theme={theme}
             setTheme={setTheme} 
             measurementSystem={measurementSystem}
             setMeasurementSystem={setMeasurementSystem}
             />
        </div>
    )
}

export default Header