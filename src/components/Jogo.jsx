import forca0 from '../assets/img/forca0.png'


export default function Jogo(props) {

    return (
        <section className="game">

            <div className='forca-contain'>
                <img src={forca0} alt='forca' className='forca' />
            </div>
            <div className='btn-word'>
                <button onClick={() => props.setActive(false)}>
                    Escolher palavra
                </button>

                <div className='letter-contain'>

                </div>
            </div>
        </section>
    )

}