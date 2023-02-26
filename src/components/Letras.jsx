// import alfabeto from '../alfabeto'
// export default function Letras({ disableLetter, arrayLetter, palavra, word, setWord, setAttempts, attempts, setOverClass, finalWord, setArrayLetter }) {
//   let failsLetter
//   function showWord() {
//     setWord(finalWord)
//   }
//   console.log(finalWord)
//   function disabledAlphabetBtns() {
//     arrayLetter = alfabeto.map(i => i.toLowerCase())
//     setArrayLetter(arrayLetter)
//     setOverClass('gameOverLose')
//   }
//   function gameOver{
//     showWord()
//     disabledAlphabetBtns()
//     changeImg()
//   }
//   function changeImg() {
//     setAttempts((attempts + 1))
//   }

//   function checkLetter(letter) {
//     let newWord = palavra.split("").map((i, index) => {
//       if (letter.toLowerCase() === i) {
//         return i
//       } else {
//         failsLetter++
//         if (failsLetter === palavra.length && attempts < 5) {
//           changeImg()
//         } else if (failsLetter === palavra.length && attempts === 5) {
//           gameOver()
//         }
//         return word[index]
//       }
//     })
    
//     // Verifica se a palavra foi completa
//     if (!newWord.includes('_')) {
//       setOverClass('gameOverWin')
//     }
  
//     if (attempts >= 5) {
//       gameOver()
//     } else {
//       setWord(newWord)
//     }
//   }
  


//   return (
//     <div className="alfabeto-contain">
//       {alfabeto.map(i => {
//         return (
//           <button
//             key={i}
//             className="alfabeto-letter"
//             disabled={(arrayLetter.length === 0 || arrayLetter.includes(i)) ? true : false}
//             onClick={() => {
//               failsLetter = 0;
//               disableLetter(i)
//               checkLetter(i)
//             }} data-test="letter">
//             {i}
//           </button>
//         )
//       })}
//     </div>
//   )
// }

import alfabeto from '../alfabeto'
import { useState } from 'react'

export default function Letras({ disableLetter, arrayLetter, palavra, word, setWord, setAttempts, attempts, setOverClass, finalWord, setArrayLetter }) {
  const [gameOver, setGameOver] = useState(false)
  let failsLetter
  
  function gameover() {
    showWord()
    disabledAlphabetBtns()
    changeImg()
  }

  function showWord() {
    console.log('a palavra era', finalWord)
    setWord(finalWord)
  }

  function disabledAlphabetBtns() {
    setGameOver(true)
    setArrayLetter(alfabeto.map(i => i.toLowerCase()))
    setOverClass('gameOverLose')
  }

  function changeImg() {
    setAttempts((attempts + 1))
  }

  function checkLetter(letter) {
    let newWord = palavra.split("").map((i, index) => {
      if (letter.toLowerCase() === i) {
        return i
      } else {
        failsLetter++
        if (failsLetter === palavra.length && attempts < 5) {
          changeImg()
        } else if (failsLetter === palavra.length && attempts === 5) {
          gameover()
        }
        return word[index]
      }
    })
    
    // Verifica se a palavra foi completa
    if (!newWord.includes('_')) {
      setGameOver(true)
      setOverClass('gameOverWin')
    }

    if (attempts >= 5) {
      gameover()
    } else {
      setWord(newWord)
    }
  }

  return (
    <div className="alfabeto-contain">
      {alfabeto.map(i => {
        return (
          <button
            key={i}
            className="alfabeto-letter"
            disabled={(arrayLetter.length === 0 || arrayLetter.includes(i) || gameOver) ? true : false}
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




