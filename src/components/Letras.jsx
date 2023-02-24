import alfabeto from './alfabeto'
export default function Letras({ disableLetter, arrayLetter, palavra, underLinePalavra, word, setWord }) {


  function checkLetter(letter){

   
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
              disableLetter(i);
              checkLetter(i);
            }}

          >
            {i}
          </button>
        );
      })}
    </div>
  );
}
