import { useState } from "react"


export default function Submit(){
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')

    const handleName = (e) =>{
        setNome(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEmail('')
        setNome('')
    }


    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label> <br />
                    <input type="text" name="nome" placeholder="Digite seu nome" onChange={handleName} value={nome}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
        <p>
            Nome: {nome} <br />
            Email: {email}
        </p>
        </>
    )
}