import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchContext from './Components/FetchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchContext>
    <App />
    </FetchContext>
  </StrictMode>,
)
