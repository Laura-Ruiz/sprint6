import { useState } from 'react';
import './App.css';
import Menu from './components/escena/Menu';

import Escena from './components/escena/Escena'
import Bienvenida from './components/escena/Bienvenida'
import arrayTextos from './textos';
import {Imagen} from './styled'


function App() {
  const [initialState, setInitialState] = useState(true);
  

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
  
  function iniciar(){
    setInitialState(preValor => !preValor)
  }
  
  const element = initialState ? <Bienvenida iniciar={iniciar}/> : 
  <div>
    <Imagen img={arrayTextos[numEscena].img}>
      <Menu changeEscena={changeEscena} />
      <Escena numEscena={numEscena}/>
    </Imagen>
  </div>
  
  return(
    <div className='App'>
      {element}
    </div>
  )
}

export default App;

