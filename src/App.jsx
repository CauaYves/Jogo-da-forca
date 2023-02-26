import { finalWord, Jogo, palavra, underLinePalavra } from "./components/Jogo";
import Letras from "./components/Letras"
import { useState } from "react";

import forca0 from './assets/img/forca0.png'
import forca1 from './assets/img/forca1.png'
import forca2 from './assets/img/forca2.png'
import forca3 from './assets/img/forca3.png'
import forca4 from './assets/img/forca4.png'
import forca5 from './assets/img/forca5.png'
import forca6 from './assets/img/forca6.png'

export default function App() {
  const [arrayLetter, setArrayLetter] = useState([])
  const [active, setActive] = useState(true)
  const [word, setWord] = useState('')
  const [forca, setForca] = useState([forca0, forca1, forca2, forca3, forca4, forca5, forca6])
  const [attempts, setAttempts] = useState(0)
  const [overClass, setOverClass] = useState('')

  function disableLetter(letter) {

    if (arrayLetter.includes(letter)) {
      alert('essa letra já foi chutada')
    } else {
      setArrayLetter([...arrayLetter, letter])
    }
  }


  return (
    <div className="App">

      <Jogo
        overClass={overClass}
        arrayLetter={arrayLetter}
        attempts={attempts}
        forca={forca}
        word={word}

        setForca={setForca}
        setArrayLetter={setArrayLetter}
        setActive={setActive}
        setWord={setWord}
      />

      <div className="alphabet-container">

        <Letras
          palavra={palavra}
          underLinePalavra={underLinePalavra}
          finalWord={finalWord}

          setForca={setForca}
          setOverClass={setOverClass}
          setAttempts={setAttempts}
          setWord={setWord}
          setActive={setActive}
          disableLetter={disableLetter}

          arrayLetter={arrayLetter}
          attempts={attempts}
          active={active}
          word={word}
          overClass={overClass}
        />

      </div>
    </div>
  );
}