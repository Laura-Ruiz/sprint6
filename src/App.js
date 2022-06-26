import { useState } from 'react';
import './App.css';
import Menu from './components/escena/Menu';
import Escena from './components/escena/Escena.js'
import arrayTextos from './textos';



function App() {
  const [numEscena, setNumEscena] = useState(0);

  function changeEscena(i) {
    setNumEscena(preNumEscena => {

      if (preNumEscena + i < 0) {
        return preNumEscena
      }

      if (preNumEscena + i >= arrayTextos.length) {
        return preNumEscena
      }

      return preNumEscena + i

    });
  }

  console.log("Num: ", numEscena);

  return (
    <div className="App">
      <Menu changeEscena={changeEscena} />
      <Escena numEscena={numEscena} />
    </div>
  );
}

export default App;

