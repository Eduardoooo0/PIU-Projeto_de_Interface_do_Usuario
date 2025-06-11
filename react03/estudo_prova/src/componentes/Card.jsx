import './Card.css'

export default function Card(props){

    return(
        <>
            <div>
                <img src={props.src} alt="" />
                <p>{props.alt}</p>
            </div>
        </>
    )
}