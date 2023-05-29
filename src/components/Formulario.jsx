import { useState, useRef } from 'react'
import { toast } from 'react-hot-toast'
import ReCAPTCHA from "react-google-recaptcha";

const Formulario = ({ generarRespuesta }) => {
    const [tema, setTema] = useState('')
    const [captchaValido, setCaptchaValido] = useState(null)

    const onChange = () => {
        setCaptchaValido(captcha.current.getValue())
    }
    const captcha = useRef(null)

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
        if (!captchaValido) {
            toast.error('Please, complete the captcha', {
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
        } else {
            toast.promise(
                generarRespuesta(tema),
                {
                    loading: 'generating your tweet...',
                    success: <b>Done!</b>,
                    error: <b>Upps... sorry! Too many requests</b>,
                }
            );
        }
    }

    return (

        <form
            action=""
            onSubmit={handleSubmit}
            className='basis-1/3 flex flex-col justify-center align-middle'
        >
            <p className="py-6">Increase the reach and engagement of your tweets with controversial posts generated with the help of <span className='text-secondary font-black'>Artificial Intelligence</span></p>
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
            <div className='mt-6 mx-auto'>
                <ReCAPTCHA
                    ref={captcha}
                    sitekey="6Ldv2CYmAAAAAG7Ghueinw8qW8c2eeIm3YZIhrUr"
                    onChange={onChange}
                />
            </div>
            <button
                type="submit"
                className="btn-secondary mt-6 btn w-full mb-4"
                disabled={!captchaValido ? true : false}
            >Generate tweet</button>
        </form>
    )
}

export default Formulario
