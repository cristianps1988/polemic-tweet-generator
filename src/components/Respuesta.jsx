import { useState, useEffect } from "react"
import { toast } from 'react-hot-toast'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import imagen from '../assets/imagen.png'
import error from '../assets/404.png'


const Respuesta = ({ resultado }) => {
    const [caracteres, setCaracteres] = useState('')
    const [porcentaje, setPorcentaje] = useState('')

    useEffect(() => {
        setCaracteres(resultado.split('').length)
        console.log(caracteres)
        setPorcentaje(Math.ceil((Number(caracteres) * 100) / 180))
    })

    const handleCopy = () => {
        alert('texto copiado')
    }

    return (
        <div className="card w-full bg-base-200 shadow-md basis-1/3 mt-4">
            <div className="card-body items-center text-center">
                {resultado && <h2 className="card-title">Result</h2>}
                <h2>{resultado ? (resultado === 429 ? (<> <img className="lg:max-h-[15rem] aspect-auto" src={error} /> <p className="mt-2">Sorry... try again later</p> </>) : resultado) : <img className="lg:max-h-[20rem] aspect-auto" src={imagen} />}</h2>
                <div className="mt-6">
                    {resultado && <><div className="radial-progress text-secondary" style={{ "--value": `${porcentaje}`, "--size": "3rem" }}>{caracteres} </div> <p className="text-xs text text-secondary">Characters used</p></>}
                </div>
                <div className="card-actions">
                    {resultado && <CopyToClipboard text={resultado}>
                        <button
                            className="btn btn-secondary mt-4"
                            onClick={handleCopy}
                        >Copy Tweet</button>
                    </CopyToClipboard>}
                </div>
            </div>
        </div>
    )
}

export default Respuesta
