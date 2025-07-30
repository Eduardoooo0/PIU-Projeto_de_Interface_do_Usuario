import { useEffect } from "react"
import { useState } from "react"


export default function Form(){
    const [cor,setCor] = useState('')
    const [nome,setNome] = useState('')
    const [count,setCount] = useState(0)

    const handleName = (e) =>{
        setNome(e.target.value)
    }
    const handleColor = (e) =>{
        setCor(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setNome('');
        setCor('');
        
    }
    
    useEffect(() =>{
        document.body.style.backgroundColor = cor
    },[count])

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Digite o nome" onChange={handleName}/>
                <select name="cores" onChange={handleColor} required>
                    <option value="" selected disabled>selecione uma cor</option>
                    <option value="blue">Azul</option>
                    <option value="red">Vermelho</option>
                    <option value="green">Verde</option>
                </select>
                <input type="submit" value="Enviar" onClick={() => setCount(count + 1)}/>
            </form>
            
        </>
    )
}