import './Styles.css';

export default function Die({ val }) {

    return (
        <div className="Die">
            <span className="DieText">{val}</span>
        </div>
    )
}