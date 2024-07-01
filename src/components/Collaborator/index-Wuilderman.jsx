import "./Collaborator.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Collaborator(props) {
    const { name, job, photo, team, id, fav } = props.data;
    const { color, deleteCollaborator, like } = props;
    return (
        <div className="collaborator">
            <AiFillCloseCircle className="delete__button" onClick={() => deleteCollaborator(id)} />
            <div className="collaboratorHeader" style={{ backgroundColor: color }}>
                <img src={photo} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{job}</h5>
                {fav ? <AiFillHeart className="like__button" color="red" onClick={() => like(id)} /> : <AiOutlineHeart className="like__button" onClick={() => like(id)} />}
                
            </div>
        </div>
    )
}