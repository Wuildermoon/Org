import "./Button.css"

export default function Button(props) {
    return <button type="submit" className="button">{props.children}</button>
}