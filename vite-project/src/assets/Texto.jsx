import { Fragment, useCallback, useState } from "react";

const Texto = () => {
    const [mostrar, setMostrar] = useState(false)
    const handlerClick = () => {
        console.log("hola desde el boton");
        setMostrar(!mostrar);
        console.log(mostrar);
    };
    return (
        <Fragment>
            { mostrar && <h1>Titulo del componente</h1>}
            <button onClick={handlerClick}>Log</button>

        </Fragment>
    )
}

export default Texto

