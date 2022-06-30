
import { Inicio } from "../../styled";
export default function Bienvenida(props) {
    return (
        <Inicio>
            <h1>Benvinguts!</h1>
            <p>Preneu el botó d'inici y viatgeu amb els botons "anterior" i "següent" per la història del nostre heroi.</p>
            <button onClick={() => props.iniciar()}>Comencem</button>
        </Inicio>
    )

}