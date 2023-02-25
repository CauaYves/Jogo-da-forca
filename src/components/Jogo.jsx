import palavras from './palavras'

let palavra = ''
let underLinePalavra = ''
console.log(palavra)
function Jogo({ arrayLetter, setActive, setArrayLetter, setWord, word, forca, attempts }) {
    function randomWord({ setActive, setArrayLetter, setWord }, array) {

        palavra = (array[Math.floor(Math.random() * array.length)])
        setActive(false)
        underLinePalavra = underLine(palavra)
        setWord(underLinePalavra)
        setArrayLetter([1])

    }
    console.log('erros:',attempts)
    function underLine(word) {

        return word.split('').map(function(char) {
            return '_';
          });

    }

    return (
        <section className="game">

            <div className='forca-contain'>
                <img src={forca[attempts]} alt={forca[attempts]} className='forca' data-test="game-image"/>
            </div>
            <div className='btn-word'>
                <button onClick={() => {
                    randomWord({ arrayLetter, setActive, setArrayLetter, setWord }, palavras)
                }} data-test="choose-word">
                    Escolher palavra
                </button>
                <div className='letter-contain'>
                    <p data-test="word">{word}</p>
                </div>
            </div>
        </section>
    )

}

export { Jogo, palavra, underLinePalavra }
