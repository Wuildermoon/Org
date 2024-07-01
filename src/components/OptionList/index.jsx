import "./OptionList.css"

export default function OptionList(props) {

    //  Map Method -> array.map((element, index) => {
    //      return <option> <option/>
    //  })

    const handleChange = (e) => {
        props.setValue(e.target.value)
    }

    return (
        <fieldset className="form__option_list">
            <label htmlFor="">Equipo</label>
            <select 
                name="" 
                id="" 
                value={props.value} 
                onChange={handleChange}
            >
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {props.teams.map((team, index) => <option value={team} key={index}>{team}</option>)}
            </select>
        </fieldset>
    )
}