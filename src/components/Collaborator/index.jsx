import "./Collaborator.css"
import { AiFillCloseCircle } from "react-icons/ai";

export default function Collaborator(props) {
    const { name, job, photo, team, id } = props.data;
    const { color, deleteCollaborator } = props;
    return (
        <div className="collaborator">
            <AiFillCloseCircle className="deleteButton" onClick={() => deleteCollaborator(id)} />
            <div className="collaboratorHeader" style={{ backgroundColor: color }}>
                <img src={photo} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        </div>
    )
}