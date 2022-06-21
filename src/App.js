
import './App.css';
import Escena from './components/escena/escena.js'
import '../src/style-sheet/escena.css'
function App() {
  return (
    <div className="App">
      <Escena
        texto="El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"
      />
      <Escena
        texto="Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."
      />
      <Escena
        texto="L'heroi va decidir travessar la porta que el portava a casa"
      />
      <Escena
        texto="Mentrestant, altres herois no van tenir tanta sort en la seva elecció ..."
      />
    </div>
  );
}

export default App;
