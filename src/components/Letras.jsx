import alfabeto from "./alfabeto"
export default function Letras() {
    return (
        <div className="alfabeto-contain">
            {alfabeto.map(i => {return <button className="alfabeto-letter">{i}</button>})}
        </div>
    )
}