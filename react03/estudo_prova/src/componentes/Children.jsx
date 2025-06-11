export default function Children({children}){
    const lista = [5,9,3,1000,62,53,33]
    const pares = lista.filter((item) => item % 2 === 0)
    return(
        <>
            <div>
                <h1>oi, é téo</h1>
                <p>
                    {pares.map((item) => 
                    (
                        <p>{item}</p>
                    ))}
                </p>
                {children}
            </div>
        </>
    )
}