import forca0 from '../assets/img/forca0.png'
import palavras from './palavras'

export default function Jogo(props) {
    let palavra = ''
    let underLinePalavra = ''

    function randomWord(props, array){
        const i = Math.floor(Math.random()*array.length)
        palavra = array[i]

        props.setActive(false)
        underLinePalavra = underLine(palavra)
        props.setWord(underLinePalavra)
    }

    function underLine(word){
        let newWord = '';

        for(let i = 0; i < word.length; i++){
            newWord += '_'
        }
        return newWord
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
                    <p>{props.word}</p>
                </div>
            </div>
        </section>
    )

}