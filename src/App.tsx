import { useState, useEffect } from "react";
import Header from './components/Header'
import Main from './components/Main'
import './styles/components/App.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { MEASUREMENT_SYSTEMS } from './constants';
function App() {

    const THEME_KEY = 'app_theme';
     const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.AUTO);
    
    const saveThemeToLocalStorage = (theme) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
};

 const loadThemeFromLocalStorage = () => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    return storedTheme ? JSON.parse(storedTheme) : true; // Nếu không có thì mặc định là theme dark
};

const [theme, setTheme] = useState(loadThemeFromLocalStorage());

    useEffect(() => {
        saveThemeToLocalStorage(theme);
    }, [theme]);

    
      useEffect(() => {
    const savedSystem = localStorage.getItem('measurementSystem');
    if (savedSystem) {
      setMeasurementSystem(savedSystem);
    }
  }, []);
 // don vi

  useEffect(() => {
    const savedSystem = localStorage.getItem('measurementSystem');
    if (savedSystem) {
      setMeasurementSystem(savedSystem);
    }
  }, []);

  // (Tùy chọn) Lưu vào localStorage
  useEffect(() => {
    localStorage.setItem('measurementSystem', measurementSystem);
  }, [measurementSystem]);

  return (
    //  <div className='App-dark'> 
     <div className= {`App-${theme ?'dark':'light'}`}> 
      {/*    */}
      <Header theme={theme} setTheme={setTheme} measurementSystem={measurementSystem}
             setMeasurementSystem={setMeasurementSystem}/>
      {/* <CurrentWheather/> */}
    <Main measurementSystem={measurementSystem}/>

    </div>
  )
}

export default App
