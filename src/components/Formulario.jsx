import { useState } from 'react'
//import { generarRespuesta } from "../respuesta"
import Alerta from './Alerta'

const Formulario = ({ generarRespuesta }) => {
    const [tema, setTema] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        if (!tema) {
            setAlerta({
                msg: 'Campo obligatorio',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000)
            return
        }
        if (tema.length < 3) {
            setAlerta({
                msg: 'Palabra muy corta',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000)
            return
        }
        generarRespuesta(tema)
        setAlerta({
            msg: 'Generando tweet',
        })
        setTimeout(() => {
            setAlerta({})
        }, 3000)
    }

    const { msg } = alerta

    return (

        <form
            action=""
            onSubmit={handleSubmit}
            className='basis-1/3 flex flex-col justify-center align-middle'
        >
            <p className="py-6">Increase the reach and engagement of your tweets with controversial posts</p>
            <div className="flex flex-col mx-auto w-full">
                <label >Topic:</label>
                <input
                    type="text"
                    placeholder="Write a topic for your polemic tweet"
                    className="input input-bordered input-primary w-full max-w-2xl mt-4"
                    value={tema}
                    onChange={e => setTema(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="btn-secondary mt-6 btn w-full mb-4"
            >Generate tweet</button>
            {msg && <Alerta
                alerta={alerta}
            />}
        </form>
    )
}

export default Formulario
