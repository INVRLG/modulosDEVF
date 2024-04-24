import { useState } from 'react'
import BotonComponente from './assets/Boton'
import Texto from './assets/Texto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hola</h1>
      <BotonComponente texto ="Pizza" icon="🍕"/>
      <BotonComponente texto ="boton dos" icon="🍕"/>
      <Texto texto="hola"></Texto>
    
    </>
  )
}

export default App
 