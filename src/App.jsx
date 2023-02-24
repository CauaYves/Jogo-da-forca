import { Jogo, palavra, underLinePalavra } from "./components/Jogo";
import Letras from "./components/Letras"
import { useState } from "react";

export default function App() {

  const [arrayLetter, setArrayLetter] = useState([])
  const [active, setActive] = useState(true)
  const [word, setWord] = useState('')

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
        setArrayLetter={setArrayLetter}
        arrayLetter={arrayLetter}
        setActive={setActive}
        word={word}
        setWord={setWord}
      />

      <div className="alphabet-container">

        <Letras
          setWord={setWord}
          word={word}
          palavra={palavra}
          underLinePalavra={underLinePalavra}
          active={active}
          setActive={setActive}
          disableLetter={disableLetter}
          arrayLetter={arrayLetter}
        />

      </div>
    </div>
  );
}