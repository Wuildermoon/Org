import "./FormField.css"

export default function FormField(props) {
    const placeholder = `${props.placeholder}...`

    const { type = "text" } = props;

    const handleChange = (e) => {
        props.setValue(e.target.value)
    }

    return (
        <fieldset className={`form__field ${type}__form__field`}>
            <label htmlFor="">{props.name}</label>
            <input 
                placeholder={placeholder} 
                required={props.required} 
                value={props.value} 
                onChange={handleChange}
                type={type}
            />
        </fieldset>
    )
}