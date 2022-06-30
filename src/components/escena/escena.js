import { Parrafo } from "../../styled";
import arrayTextos from "../../textos"
//import React, {useState} from 'react';

function Escena(props) {
    
    return (
        <div>

            {arrayTextos.map((item, index) =>
            (
                <Parrafo key={`paragrafo-${index}`} active={(props.numEscena) === arrayTextos.indexOf(item) ? "pink" : "white"}>
                    {item.texto}
                </Parrafo>

            ))
            }
        </div>
    )
}

export default Escena;