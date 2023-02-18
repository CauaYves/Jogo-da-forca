import { useState } from "react"
import alfabeto from "./alfabeto"

export default function Letras(props) {
    const [choosed, setChoosed] = useState(false)
    function chooseLetter(){
        setChoosed(true)
    }

    return (
        <div className="alfabeto-contain">
            {alfabeto.map(i => {
                return <button key={i} className="alfabeto-letter" disabled={props.active} onClick={() => chooseLetter}>{i}</button>
            })}
        </div>
    )
} 