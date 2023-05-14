import { respuesta } from "../respuesta"
import { useState } from "react"

const Respuesta = () => {
    const [tema, setTema] = useState('Prueba')
    return (
        <div className="card w-96 bg-base-200 shadow-md">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Tweet polémico</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa veniam soluta officia aliquam optio nesciunt neque nihil natus odio, similique dolorem praesentium debitis expedita quae repudiandae aut at impedit.</p>
                {respuesta(tema)}
                <div className="card-actions">
                    <button className="btn btn-primary mt-4">Copiar</button>
                </div>
            </div>
        </div>
    )
}

export default Respuesta
