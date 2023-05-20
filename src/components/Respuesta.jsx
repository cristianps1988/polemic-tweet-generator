import { useState } from "react"
//import { resultado } from "../respuesta"
import imagen from '../assets/imagen.png'


const Respuesta = ({ resultado }) => {
    return (
        <div className="card w-full bg-base-200 shadow-md basis-1/3 mt-4">
            <div className="card-body items-center text-center">
                {resultado && <h2 className="card-title">Result</h2>}
                <p>{resultado ? resultado : <img src={imagen} />}</p>
                {/* <div className="card-actions">
                    {resultado && <button className="btn btn-secondary mt-4">Copiar</button>}
                </div> */}
            </div>
        </div>
    )
}

export default Respuesta
