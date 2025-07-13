// Component ThemeBackground: thử nghiệm cơ chế toggle theme trong local component
// Mục đích: giữ state `theme` (true/false), truyền xuống Header để chuyển theme
import { useState } from 'react';
import Header from '../components/Header';

function themeBackground() {
 // true = dark theme, false = light theme
  const [theme, setTheme] = useState(true);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}


export default themeBackground;
