import { listaImagens } from "./imagens"
import './Galeria.css'
import { useState } from "react"
import Card from "./Card"

export default function Galeria(){
    const [image,setImage] = useState(null)
    return(
        <>
            <div className="div2">
                {listaImagens.map((item) => (
                    <img src={item.src} alt={item.alt} onClick={() => setImage(item)} />
                ))}
            </div>
            {image && <Card src={image.src} alt={image.alt} />}
            
        </>
    )
}