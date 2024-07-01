import { useState } from "react";
import "./Form.css";
import FormField from "../FormFieldset";
import OptionList from "../OptionList";
import Button from "../Button";

const Form = (props) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("")

    const { registerCollaborator } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataToSend = {
            name,
            job,
            photo,
            team
        }
        registerCollaborator(dataToSend);
    }

    return (
        <section className="form__container">
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormField
                    name="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    value={name}
                    setValue={setName}
                />
                <FormField
                    name="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    value={job}
                    setValue={setJob}
                />
                <FormField
                    name="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    value={photo}
                    setValue={setPhoto}
                />
                <OptionList
                    value={team}
                    setValue={setTeam}
                    teams={props.teams}
                />
                <Button>
                    Crear
                </Button>
            </form>
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormField
                    name="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    value={name}
                    setValue={setName}
                />
                <FormField
                    name="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    value={job}
                    setValue={setJob}
                />
           </form>
        </section>
    )
}

export default Form;