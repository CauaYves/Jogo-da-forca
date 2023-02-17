import Jogo from "./components/Jogo";
import Letras from "./components/Letras"
import { useState } from "react";

export default function App() {

  const [active, setActive] = useState(true)

  return (
    <div className="App">
      <Jogo setActive={setActive}/>
      
      <div className="alphabet-container">
        <Letras active={active}/> 
      </div>
    </div>
  );
}

