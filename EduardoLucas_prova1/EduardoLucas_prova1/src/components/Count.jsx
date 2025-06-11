import { useState } from "react"



export default function Count(){

    // Definindo o useState
    const [count, setCount] = useState(0)
    return(
        <>
            {/* Adicionando botão com evento onclick para incrementar o valor e mudando estilo para aumentar o botão ao ultrapassar 10 */}
            <button style={{height:count > 10 ? '100px':''}} onClick={() => setCount((count) => count + 1)} >
                +
            </button>
            {/* Número de cliques */}
            <p>{count}</p>

            {/* Adicionando botão com evento onclick para decrementar o valor e mudando estilo para diminuir o botão ao atingir um número menor que 0*/}
            <button style={{height:count < 0 ? '10px':''}} onClick={() => setCount((count) => count - 1)}>
                -
            </button>
        </>
    )
}