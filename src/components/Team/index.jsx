import "./Team.css"
import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";

export default function Team(props) {
    //  Destructuración
    const { primaryColor, secondaryColor, title, id } = props.data;
    const { collaborators, deleteCollaborator, updateColor } = props;

    const sectionStyle = { backgroundColor: hexToRgba(primaryColor, 0.4) };
    const titleStyle = { borderColor: primaryColor };

    return <>
        {
            collaborators.length > 0 && (
                <section className="team" style={sectionStyle}>
                    <input 
                        type="color"
                        className="inputColor"
                        value={primaryColor}
                        onChange={e => {
                            updateColor(e.target.value, id);
                        }}
                    />
                    <h3 style={titleStyle}>{title}</h3>
                    <div className="collaboratorList">
                        {
                            collaborators.map((collaborator, index) => <Collaborator 
                                data={collaborator} 
                                key={index}
                                color={primaryColor}
                                deleteCollaborator={deleteCollaborator}
                            />)
                        }
                    </div>
                </section>
            )
        }
    </>
}