import { useEffect, useState } from "react"

export default function InputChangeColor(){
    const colors = ['blue','green','pink','red','gray','yellow']
    const [text,setText] = useState()

    const handleText = (e) =>{
        setText(e.target.value)
    }

    useEffect(() =>{
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor
    },[text])

    return(
        <>
            <form>
                <input type="text" name="text" placeholder="digite" value={text} onChange={handleText}/>
            </form>
        </>
    )
}