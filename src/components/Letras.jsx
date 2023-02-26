import alfabeto from './alfabeto'
export default function Letras({ disableLetter, arrayLetter, palavra, word, setWord, setAttempts, attempts, setOverClass, finalWord, setArrayLetter }) {
  let failsLetter

  function gameOver(){
    //desabilitar os botões de A a Z
    word = finalWord
    setWord(word)
    arrayLetter = alfabeto.map(i => i.toLowerCase())
    setArrayLetter(arrayLetter)
    setOverClass('gameOverLose')
  }
console.log(palavra)
  function changeImg() {
    setAttempts((attempts + 1))
  }

  function checkLetter(letter) {
    
    let newWord = palavra.split("").map((i, index) => {

      if (letter.toLowerCase() === i) {
        return i
      } else {
        
        failsLetter++

        if(attempts === 6){
          gameOver()
        }else if(failsLetter === palavra.length && attempts < 5){
          changeImg()
        }else if(failsLetter === palavra.length && attempts === 5){
          gameOver()
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



