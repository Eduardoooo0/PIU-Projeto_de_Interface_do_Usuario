import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tema from './componentes/Tema'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tema/>
  </StrictMode>,
)
