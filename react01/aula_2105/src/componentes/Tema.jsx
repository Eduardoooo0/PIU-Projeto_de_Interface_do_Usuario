import React, { useState, useEffect } from 'react';
import './Tema.css'

function Tema() {
  // Estado para controlar o tema
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efeito para atualizar o tema no body sempre que mudar
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Alterna entre os temas claro e escuro
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="App">
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <h1>{isDarkMode ? 'Modo Escuro Ativado' : 'Modo Claro Ativado'}</h1>
    </div>
  );
}

export default Tema;