import { useState } from "react";
import Info from "./components/Info"
import Teclado from "./components/Teclado"


function App() {

  const [display, setDisplay] = useState('');


  function handleButtonClick(id) {
    setDisplay(display + id);

  }

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());

    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('');
  }

  const clearOne = () => {
    setDisplay(display.slice(0, -1));
  }

  return (
    <>
      <h1>Calculadora</h1>

      <Info display={display} />
      <Teclado
        handleButtonClick={handleButtonClick}
        calculate={calculate} clear={clear}
        clearOne={clearOne}
      />
    </>
  )
}

export default App
