import React from "react";
import '../styles/components/Header.scss'
import Place from './Place'
import Search from './Search'
import Settings from './Settings'
function Header({ theme, setTheme }){
    return(
        <div  className="Header">
            <Place/>
            <Search/>
            <Settings theme={theme} setTheme={setTheme}/>
        </div>
    )
}

export default Header