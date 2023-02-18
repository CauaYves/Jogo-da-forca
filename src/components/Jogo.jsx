import forca0 from '../assets/img/forca0.png'
import palavras from './palavras'

export default function Jogo(props) {

    let palavra = ""

    function randomWord(props, array){
        const i = Math.floor(Math.random()*array.length)
        props.setActive(false)
        palavra = array[i]
        console.log(palavra)
    }

    return (
        <section className="game">

            <div className='forca-contain'>
                <img src={forca0} alt='forca' className='forca' />
            </div>
            <div className='btn-word'>
                <button onClick={ () => randomWord(props, palavras)}>
                    Escolher palavra
                </button>
                <div className='letter-contain'>
                {console.log(palavra)}
                    <p>{palavra[0]}</p>
                </div>
            </div>
        </section>
    )

}