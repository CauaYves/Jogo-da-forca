import Jogo from "./components/Jogo";
import Letras from "./components/Letras"
import { useState } from "react";

export default function App() {

  const [active, setActive] = useState(true)
  const [word, setWord] = useState('')

  return (
    <div className="App">
      <Jogo setActive={setActive} word={word} setWord={setWord}/>
      
      <div className="alphabet-container">
        <Letras active={active} setActive={setActive}/> 
      </div>
    </div>
  );
}

