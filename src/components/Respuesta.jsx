import { useState, useEffect } from "react"
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
    return (
        <div className="card w-full bg-base-200 shadow-md basis-1/3 mt-4">
            <div className="card-body items-center text-center">
                {resultado && <h2 className="card-title">Result</h2>}
                <h2>{resultado ? (resultado === 429 ? (<> <img className="lg:max-h-[15rem] aspect-auto" src={error} /> <p className="mt-2">Sorry... try again later</p> </>) : resultado) : <img className="lg:max-h-[20rem] aspect-auto" src={imagen} />}</h2>
                {/* <div className="card-actions">
                    {resultado && <button className="btn btn-secondary mt-4">Copy</button>}
                </div> */}
                <div className="mt-6">
                    {resultado && <div className="radial-progress text-secondary" style={{ "--value": `${porcentaje}`, "--size": "3rem" }}>{caracteres}</div>}
                </div>
            </div>
        </div>
    )
}

export default Respuesta
