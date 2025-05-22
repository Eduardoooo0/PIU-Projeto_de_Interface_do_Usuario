import React, { useState, useEffect } from 'react';
import './Tema.css'

function Tema() {
  
  const [isDarkMode, setIsDarkMode] = useState(false);


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
    <>
        <div className="App">
        <button
            id="botao"
            className={isDarkMode ? 'botao-claro' : 'botao-escuro'}
            onClick={toggleTheme}
            >
            {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>

        </div>
    </>
  );
}

export default Tema;