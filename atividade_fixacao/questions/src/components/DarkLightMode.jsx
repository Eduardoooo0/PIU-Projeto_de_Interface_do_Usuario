import { useEffect, useState } from "react"


export default function DarkLightMode(){
    const [isDarkMode,setDarkMode] = useState(false)
    useEffect(() => {
        if (isDarkMode === true){
            document.body.style.backgroundColor = 'black';
        }else{
            document.body.style.backgroundColor = 'white';
        }
    },[isDarkMode])
    return(
        <>
            <button onClick={() => setDarkMode(isDarkMode === false ? true : false)}>{isDarkMode === true ? 'set Light':'set Dark'}</button>
        </>
    )
}