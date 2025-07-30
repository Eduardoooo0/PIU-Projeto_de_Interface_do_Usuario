import { useState } from "react"

export default function Login(){
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [users,setUsers] = useState([])

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`User:${username} | Password:${password}`)
        setUsers((user) =>[
            ...user,
            {username,password}
        ]);
        setUserName('');
        setPassword('');
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={username} onChange={handleUserName}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handlePassword}/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}