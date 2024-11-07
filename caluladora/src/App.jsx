import { useState } from "react";
import Info from "./components/Info"
import Teclado from "./components/Teclado"


function App() {

  const [numero, setNumero] = useState(0);
  const [remante, setRemante] = useState(0);

  function digitosMarcados(numero) {
    console.log('digitosMarcados',numero);
    
  }

  return (
    <>
      <h1>Calculadora</h1>

      <Info />
      <Teclado digitosMarcados={digitosMarcados} />
    </>
  )
}

export default App
