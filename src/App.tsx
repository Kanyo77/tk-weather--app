import { useState, useEffect } from "react";
import Header from './components/Header'
import Main from './components/Main'
import './styles/components/App.scss'
// import themecontext from './context/Themecontext'
import 'bootstrap-icons/font/bootstrap-icons.css'


function App() {

    const THEME_KEY = 'app_theme';
    
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

  return (
    //  <div className='App-dark'> 
     <div className= {`App-${theme ?'dark':'light'}`}> 
      {/*    */}
      <Header theme={theme} setTheme={setTheme}/>
      {/* <CurrentWheather/> */}
    <Main/>

    </div>
  )
}

export default App
