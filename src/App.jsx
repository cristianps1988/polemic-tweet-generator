import Formulario from './components/Formulario'
import Respuesta from './components/Respuesta'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Footer from './components/Footer'
import respuesta from './respuesta'
import { Toaster } from 'react-hot-toast'


function App() {
  const { resultado, generarRespuesta } = respuesta()
  return (
    <>
      <div><Toaster /></div>
      <Hero />
      <div className='flex flex-col lg:flex-row w-11/12 md:w-3/4 lg:w-3/4 mx-auto lg:justify-center lg:my-auto lg:gap-20 mb-10 lg:h-[24rem]'>
        <Formulario
          generarRespuesta={generarRespuesta}
        />
        <Divider />
        <Respuesta
          resultado={resultado}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
