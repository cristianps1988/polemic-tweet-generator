import Formulario from './components/Formulario'
import Respuesta from './components/Respuesta'


function App() {

  return (
    <>
      <div className="flex flex-col mx-auto mt-40 w-3/4">
        <h1 className="text-5xl text-center">Escribe un tema para generar tu <span className="text-secondary font-black">tweet polémico</span></h1>
        <div>
          <Formulario />
        </div>
        <div className="flex mx-auto mt-6 mb-20">
          <Respuesta />
        </div>
      </div>
    </>
  )
}

export default App
