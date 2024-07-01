import { useState } from "react"
import "./MyOrg.css"

export default function MyOrg(props) {
    //  Estado - hooks
    //  useState
    //  const [nombreVariable, funcionActualizar] = useState(valorInicial)
    //  const [state, setState] = useState()
    
    // const [show, updateShow] = useState(true);
    // const handleClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !show);
    //     updateShow(!show); //   switch state
    // }

    return (
        <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            <img src="/img/addButton.png" alt="Boton de agregar" onClick={props.updateShowForm} />
        </section>
    )
}