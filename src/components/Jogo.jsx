import forca0 from '../assets/img/forca0.png'
export default function Jogo() {

    return (
        <section className="game">

                <div className='forca-contain'>
                    <img src={forca0} alt='forca' className='forca' />
                </div>
                <div className='btn-word'>
                    <button>
                        Escolher palavra
                    </button>
                    <div className='letter-contain'>
                        <p>_</p>
                        <p>_</p>
                        <p>_</p>
                        <p>_</p>
                        <p>_</p>
                        <p>_</p>
                        <p>_</p>
                        <p>_</p>
                        <p>_</p>
                    </div>
                </div>
        </section>
    )

}