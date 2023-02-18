import alfabeto from "./alfabeto"

export default function Letras(props) {

    return (
        <div className="alfabeto-contain">
            {alfabeto.map(i => {
                return <button key={i} className="alfabeto-letter" disabled={props.active}>{i}</button>
            })}
        </div>
    )
} 