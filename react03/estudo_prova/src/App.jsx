import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tema from './componentes/Tema'
import Galeria from './componentes/Galeria'
import Card from './componentes/Card'
import Children from './componentes/Children'
import OneTarefa from './componentes/OneTarefa'
import Dashboard from './componentes/Dashboard'
import { listTarefas } from "./componentes/tarefas"
function App() {
  

  return (
    <>
      <Dashboard>
        {listTarefas.map((item) => (
            <OneTarefa titulo={item.titulo} data={item.data}/>
        ))}
      </Dashboard>
    </>
  )
}

export default App
