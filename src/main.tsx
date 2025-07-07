import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WeatherProvider } from './context/weather.context';
 import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <WeatherProvider>
                <App />
          </WeatherProvider>
  </StrictMode>,
)
