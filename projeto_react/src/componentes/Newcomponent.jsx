import './Newcomponent.css'
function NewComponent(){
    function mudarCor(){
        let div = document.getElementById('div1')
        return(
            div.style.backgroundColor = 'red'
        )
    }
    return(
        <>
            <div  id="div1">
                <button onClick={mudarCor}>
                    clique aqui
                </button>
            </div>
        </>
    )
}

export default NewComponent