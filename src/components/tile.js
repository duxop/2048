import './tile.css'

export default function(props) {

    return (
        <div className="tile">
            {props.num === 0 ? "" : props.num}
        </div>
    )
}