function Escopo(){
    const label = 'clique aqui'
    function handleClick(){
        return(
            alert('alerta')
        )
    }
    return(
        <>
            <div>
                <h1>Teste</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, fugit ducimus ipsum quo, facilis expedita voluptate omnis necessitatibus qui quaerat ab eum cupiditate voluptatem? Esse possimus blanditiis quidem quo necessitatibus.</p>
            </div>
            <div>
                <button onClick={() => console.log('téo')}>{label}</button>
            </div>
            <div>
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
        
        
        )
}

export default Escopo