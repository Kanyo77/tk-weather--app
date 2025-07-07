import { useState, useEffect } from "react";
import '../styles/components/Settings.scss';
import {MEASUREMENT_SYSTEMS} from '../constants'
function Settings({ theme, setTheme }) {
    //  const [theme, setTheme] = useState(true);

    const [currentSystem, setCurrentSystem] = useState('auto');

    const [opensetting,setOpensetting] = useState(false);

    const toggleTheme = () => {
     setTheme((prevtheme) => !prevtheme);
    }

    const changeMeasuremen = () =>{
          setOpensetting((prevOpensetting) => !prevOpensetting);
    }

    const changeUnits= (system) => {
        setCurrentSystem(system);
        console.log(system)
    }


    return (
        <div className="Settings">
            <div className="theme-toggler">
                <div className={`theme-buttons`} onClick={toggleTheme}>

                 <div className={`light-theme-btn ${theme  ?'':'active' }`}>
                            <i className="bi bi-sun"></i>
                 </div>

                 <div className={`dark-theme-btn ${theme  ? 'active' : ''}`}>
                            <i className="bi bi-moon"></i>
                 </div>

                </div>
            </div>

            {/* Nút Settings */}
            <div className="settings-btn"  onClick={changeMeasuremen}>
                <i className={`bi bi-gear${opensetting  ? '-fill' : ''}`}></i>
            </div>
                <div className={`settings-menu ${opensetting  ? 'open' : ''}`}>
                    {/* <div className={`settings-menu`}> */}
                    <div className="measurement-stystems">
                            <h4>Measurement Systems:</h4>
                        <div className='systems'>
                        {Object.values(MEASUREMENT_SYSTEMS).map((system) =>(
                            <div className="system" 
                            key={system}
                            //  onClick={changeUnits}>
                              onClick={() => changeUnits(system)}
                             >
                                {system}
                                </div>

                        ))}
                          </div>

                    </div>
                </div>
        </div>
    );
}

export default Settings;
