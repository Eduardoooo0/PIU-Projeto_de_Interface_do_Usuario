

export default function Form(){

    return(
        <>
        <div>
            <form>
                <div>
                    <label htmlFor="name">Nome</label> <br />
                    <input type="text" name="name" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" name="email" placeholder="Digite seu email"/>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
        </>
    )
}