import palavras from '../palavras'

let palavra = ''
let underLinePalavra = ''
let finalWord = ''

function Jogo({ arrayLetter, setActive, setArrayLetter, setWord, word, forca, attempts, overClass, setOverClass, setAttempts }) {

    function resetGame() {
        palavra = ''
        underLinePalavra = ''
        finalWord = ''
        setWord('')
        setArrayLetter([])
        setOverClass('')
        setAttempts(0)
    }

    function randomWord({ setActive, setArrayLetter, setWord }, array) {
        
        resetGame()
        palavra = (array[Math.floor(Math.random() * array.length)])
        finalWord = palavra
        setActive(false)
        underLinePalavra = underLine(palavra)
        setWord(underLinePalavra)
        setArrayLetter([1])
    }

    function underLine(word) {
        return word.split('').map(function (char) {
            return '_';
        });
    }
    console.log(arrayLetter)

    return (
        <section className="game">
            <div className='forca-contain'>
                <img src={forca[attempts]} alt={forca[attempts]} className='forca' data-test="game-image" />
            </div>
            <div className='btn-word'>
                <button onClick={() => {
                    randomWord({ arrayLetter, setActive, setArrayLetter, setWord }, palavras)
                }} data-test="choose-word">
                    Escolher palavra
                </button>
                <div className='letter-contain'>
                    <p className={overClass} data-test="word">{word}</p>
                </div>
            </div>
        </section>
    )

}

export { Jogo, palavra, underLinePalavra, finalWord, }
