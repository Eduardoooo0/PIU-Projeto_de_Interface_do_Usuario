import { useEffect, useState } from "react"

export default function RenderList(){
    const [albuns,setAlbuns] = useState([])
    
    useEffect(() => {
        const fetchAlbuns = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await response.json();
                setAlbuns(data);
            } catch (error) {
                console.error("Erro ao buscar albuns:", error);
            }
        }

        fetchAlbuns();

    },[])

    return(
        <>
            
            
            <ol>
                {albuns.map((item) => (
                <li key={item.id}>{item.title}<br /></li>
                ))}
            </ol>

            
        </>
    )
}