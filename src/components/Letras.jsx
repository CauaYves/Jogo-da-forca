import alfabeto from './alfabeto'
export default function Letras({ disableLetter, arrayLetter, palavra, forca, word, setWord, setAttempts, attempts }) {
  let failsLetter

  function changeImg() {
    setAttempts((attempts + 1))
  }

  function checkLetter(letter) {

    let newWord = palavra.split("").map((i, index) => {

      if (letter.toLowerCase() === i) {
        return i
      } else {
        
        failsLetter++

        if(failsLetter === palavra.length){
          changeImg()
        }
        return word[index]
      }
    })
    setWord(newWord)
  }

  return (
    <div className="alfabeto-contain">
      {alfabeto.map(i => {
        return (
          <button
            key={i}
            className="alfabeto-letter"
            disabled={(arrayLetter.length === 0 || arrayLetter.includes(i)) ? true : false}
            onClick={() => {
              failsLetter = 0;
              disableLetter(i)
              checkLetter(i)
            }} data-test="letter">
            {i}
          </button>
        )
      })}
    </div>
  )
}



