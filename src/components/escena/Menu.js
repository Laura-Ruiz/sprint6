import { Botones } from "../../styled";

function Menu(props) {

    return (
        <Botones>
            <button onClick={() => props.changeEscena(-1)}>Anterior</button>
            <button onClick={() => props.changeEscena(1)}>Següent</button>
        </Botones>
        
    )
}

export default Menu;