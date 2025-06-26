import { useState } from "react"
import './Tarefas.css'
export default function Tarefas(){
    const [lista,setLista] = useState([])
    const [tarefa,setTarefas] =  useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLista([...lista,tarefa])
        setTarefas('')
    }
    const handleClear = (e) =>{
        setLista([])
    }
    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="tarefa">Digite uma tarefa:</label><br />
                    <input type="text" name="tarefa" placeholder="Digite a Tarefa" value={tarefa} onChange={(e) => {setTarefas(e.target.value)}}/><br/>
                    <input type="submit" value="Enviar"/>
                </form>
                <button onClick={handleClear}>reset</button>
                {lista.map((item) => (
                    <div className="tarefas">
                        {item}
                    </div>
                ))}
            </div>
        </>
    )
}