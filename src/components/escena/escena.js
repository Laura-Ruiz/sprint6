import { Parrafo } from "../../styled";
import arrayTextos from "../../textos"
//import React, {useState} from 'react';

function Escena(props) {
    //console.log(props)

    return (
        <div>

            {arrayTextos.map((item) =>
            (
                <Parrafo key={item.toString()} active={(props.numEscena) === arrayTextos.indexOf(item) ? "pink" : "none"}>
                    {item}
                </Parrafo>

            ))
            }
        </div>
    )
}

export default Escena;