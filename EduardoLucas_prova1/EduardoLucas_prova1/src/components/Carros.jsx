import { carros } from "./dados_carros";
import './Carros.css'
export default function Carros(){
    // fazendo a filtragem de carros com ano superior a 2019
    const carros_sup = carros.filter(sup => sup.ano > 2019)
    return(
        <>

            <h1>Modelo e cores dos carros:</h1>
            {/* renderizando a lista carros para obter as informações de modelo e cor */}
            {carros.map((car) => (
                <div className="div_car">
                    <p>{car.modelo}</p>
                    <p>{car.cor}</p>
                </div>
            ))}


            <h1>Informações de carros com ano superior a 2019:</h1>
            {/* renderizando a lista carros_sup para obter as informações de carros com ano superior a 2019 */}
            {carros_sup.map((item) =>(
                <div className="div_car">
                    <p>{item.id}</p>
                    <p>{item.ano}</p>
                    <p>{item.cor}</p>
                    <p>{item.modelo}</p>
                </div>
            ))}
        </>
    )
}