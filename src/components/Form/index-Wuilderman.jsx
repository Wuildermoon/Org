import { useState } from "react";
import "./Form.css";
import FormField from "../FormField";
import OptionList from "../OptionList";
import Button from "../Button";

const Form = (props) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [photo, setPhoto] = useState("");
    const [team, setTeam] = useState("")

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const { registerCollaborator, createTeam } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataToSend = {
            name,
            job,
            photo,
            team,
            fav: false
        }
        registerCollaborator(dataToSend);
    }

    const handleNewTeam = (e) => {
        e.preventDefault();
        createTeam({ title, primaryColor: color });
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
            <form onSubmit={handleNewTeam}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormField
                    name="Titulo"
                    placeholder="Ingresa el titulo del equipo"
                    required
                    value={title}
                    setValue={setTitle}
                />
                <FormField
                    name="Color"
                    placeholder="Ingresa el color del equipo en Hex"
                    required
                    value={color}
                    setValue={setColor}
                    type="color"
                />
                <Button>
                    Registrar equipo
                </Button>
            </form>
        </section>
    )
}

export default Form;