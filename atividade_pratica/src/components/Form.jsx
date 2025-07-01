import { useState } from "react"
import './Form.css'

export default function Form(){
    const [titulo,setTitulo] = useState('')
    const [descricao,setDescricao] = useState('')
    const [listatarefas,setListaTarefas] = useState([])

    const addTarefa = () =>{
        const novatarefa = {
            title:titulo,
            desc:descricao
        }
        setListaTarefas([...listatarefas,novatarefa])
    }

    const handleTitulo = (e) =>{
        setTitulo(e.target.value)
    }
    const handleDescricao = (e) =>{
        setDescricao(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTarefa()
        setDescricao('')
        setTitulo('')
    }

    return(
        <>
            <h1>Lista de tarefas</h1>
            <hr />
            <form id="form" onSubmit={handleSubmit}>
                <div className="div-input">
                    <label htmlFor="Titulo"><b>Titulo: </b> </label>
                    <input className='inputs' type="text" name="titulo"  placeholder="Digite o título" onChange={handleTitulo} value={titulo}/>
                </div>
                <div className="div-input">
                    <label htmlFor="descricao"><b>Descrição:</b></label>
                    <input className='inputs' id='desc' type="text" name="descricao"  placeholder="Digite o descrição" onChange={handleDescricao} value={descricao}/>
                </div>
                <input id="submit" type="submit" value="Enviar" />
            </form>
            
            {listatarefas.map((item) => (
                <div id="tarefa">
                    <span>Titulo: {item.title}</span>
                    <span>Descrição: {item.desc}</span>
                </div>
            ))}
        </>
    )
}