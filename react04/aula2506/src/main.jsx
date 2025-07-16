import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './components/Form.jsx'
import State from './components/State.jsx'
import Submit from './components/Submit.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Submit/>
  </StrictMode>,
)
