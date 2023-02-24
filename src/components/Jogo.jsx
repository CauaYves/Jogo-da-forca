import forca0 from '../assets/img/forca0.png'
import palavras from './palavras'

let palavra = ''
let underLinePalavra = ''

function Jogo({ arrayLetter, setActive, setArrayLetter, setWord, word }) {

    function randomWord({ arrayLetter, setActive, setArrayLetter, setWord }, array) {

        setArrayLetter([])

        for (let i = 0; i < 9; i++) {

            palavra = array[Math.floor(Math.random() * array.length)]

        }

        setActive(false)
        underLinePalavra = underLine(palavra)
        setWord(underLinePalavra)
        setArrayLetter([1])

    }

    function underLine(word) {
        console.log(word)
        let newWord = []

        for (let i = 0; i < word.length; i++) {
            newWord.push('_')
        }
        return newWord
    }

    return (
        <section className="game">

            <div className='forca-contain'>
                <img src={forca0} alt='forca' className='forca' />
            </div>
            <div className='btn-word'>
                <button onClick={() => randomWord({ arrayLetter, setActive, setArrayLetter, setWord }, palavras)}>
                    Escolher palavra
                </button>
                <div className='letter-contain'>
                    <p>{word}</p>
                </div>
            </div>
        </section>
    )

}

export { Jogo, palavra, underLinePalavra }
