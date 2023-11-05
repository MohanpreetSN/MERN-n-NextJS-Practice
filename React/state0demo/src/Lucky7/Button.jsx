import "./Styles.css";

export default function Button({ onClick, text }) {
    return (
        <button className="Button" onClick={onClick}>
            {text}
        </button>
    )
}