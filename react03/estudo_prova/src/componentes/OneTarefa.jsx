import { useState } from "react"
import './OneTarefa.css'

export default function OneTarefa(props){
    const [concluida,setConcluida] = useState(false)
    return(
        <>
            <div className="div3" style={{ backgroundColor: !concluida ? 'red' : 'green' }}>
                <h1>{props.titulo}</h1>
                <p>{props.data}</p>
                <input type="checkbox" onClick={() => setConcluida(!concluida ? true : false)}/>
            </div>
        </>
    )
}