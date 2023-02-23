import alfabeto from './alfabeto'
export default function Letras({ active, disableLetter, arrayLetter }) {

    return (
      <div className="alfabeto-contain">
        {alfabeto.map(i => {
          return (
            <button
              key={i}
              className="alfabeto-letter"
              disabled={(arrayLetter.length === 0 || arrayLetter.includes(i)) ? true : false}
              onClick={() => disableLetter(i)}
            >
              {i}
            </button>
          );
        })}
      </div>
    );
  }
