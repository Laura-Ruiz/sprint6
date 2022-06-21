import { Parrafo } from "../../styled";


function Escena({ texto }) {
    return (
        <div>
            <Parrafo className="container-parrafo">
                {texto}
            </Parrafo>
        </div>
    )


}

export default Escena;