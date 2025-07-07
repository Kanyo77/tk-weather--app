import React, { createContext, useState, useEffect } from 'react';

function themeBackground(){
   
  const [theme, setTheme] = useState(true);

    // useEffect(() => {
    //     console.log('Theme ở App:', theme);
    // }, [theme]);

     return (
        <div className={`app ${theme}`}>
            <Header theme={theme} setTheme={setTheme} />
        </div>
    );
}


export { ThemeProvider };
export default ThemeContext;
