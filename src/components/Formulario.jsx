import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Formulario = ({ generarRespuesta }) => {
    const [tema, setTema] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        if (!tema) {
            toast.error('Required', {
                style: {
                    color: 'rgb(254 242 242)',
                    background: 'rgb(248 113 113)'
                },
                iconTheme: {
                    primary: 'rgb(254 242 242)',
                    secondary: 'rgb(248 113 113)',
                },
            })
            return
        }
        if (tema.length < 3) {
            toast.error('Too Short', {
                style: {
                    color: 'rgb(254 242 242)',
                    background: 'rgb(248 113 113)'
                },
                iconTheme: {
                    primary: 'rgb(254 242 242)',
                    secondary: 'rgb(248 113 113)',
                },
            })
            return
        }
        generarRespuesta(tema)
    }

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
        </form>
    )
}

export default Formulario
