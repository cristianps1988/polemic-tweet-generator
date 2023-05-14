import { useState } from 'react'

const Formulario = () => {
    const [tema, setTema] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(tema)
    }

    return (
        <form
            action=""
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col mx-auto w-full mt-10">
                <input
                    type="text"
                    placeholder="¿Sobre que quieres crear tu tweet polémico?"
                    className="input input-bordered input-primary w-full max-w-2xl mt-6"
                    value={tema}
                    onChange={e => setTema(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="mt-6 btn w-full"
            >Generar tweet</button>
        </form>
    )
}

export default Formulario
