
import { Inicio } from "../../styled";
export default function Bienvenida(props) {
    return (
        <Inicio>
            <h1>Benvinguts!</h1>
            <p>Preneu al botó d'iniciar per començar la història del nostre heroi.</p>
            <button onClick={() => props.iniciar()} >Inicio</button>
        </Inicio>
    )

}