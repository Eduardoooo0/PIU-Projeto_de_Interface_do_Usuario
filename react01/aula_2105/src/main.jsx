import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gallery from './componentes/Galeria.jsx'
import Props from './componentes/Props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Props nome="Eduardo" />
    <Gallery/>
  </StrictMode>,
)
