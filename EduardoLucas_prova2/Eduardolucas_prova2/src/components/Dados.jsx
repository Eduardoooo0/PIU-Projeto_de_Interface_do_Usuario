import { useEffect, useState } from "react"

export default function Dados(){
    const [dados,setDados] = useState([])
    const [number,setNumber] = useState()
    const [count, setCount] = useState(0)
    const DadosFiltrados = dados.filter((user) => user.userId === Number(number))
    useEffect(() => {
        const fetchDados = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setDados(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }

        console.log('Requisição atualizada')
        fetchDados();
    },[count])

    const handleNumber = (e) => {
        setNumber(e.target.value)
    }
    return(
        <>
            <form>
                <input type="number" name="number" min={1} max={10} value={number} onChange={handleNumber} placeholder='Digite um numero de 1 a 10' />
            </form>
            <button onClick={() => setCount(count + 1)}>Recarregar</button>
            <ol>
                {DadosFiltrados.map((item) => (
                <li key={item.id}>{item.title}<br /></li>
                ))}
            </ol>

            
        </>
    )
}