import { useEffect, useState } from 'react';
import './Tema.css'

export default function Tema(){
    
    const [tema,setTema] = useState('white')
    useEffect(() => {
        document.body.style.backgroundColor = tema;
        document.body.style.color = tema === 'white' ? 'black' : 'white';
    }, [tema]);

    return(
        <>
            <button onClick={() => {setTema(tema === 'white' ? 'black':'white')}}>
                Tema {tema === 'white' ? 'claro':'escuro'}
            </button>
        </>
    )
}