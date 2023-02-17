import Jogo from "./components/Jogo";
import Letras from "./components/Letras"
export default function App() {
  return (
    <div className="App">
      <Jogo />
      <div className="alphabet-container">
        <Letras />
      </div>
    </div>
  );
}

