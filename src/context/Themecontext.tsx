import { useState } from 'react';

function themeBackground() {

  const [theme, setTheme] = useState(true);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export { ThemeProvider };
export default ThemeContext;
