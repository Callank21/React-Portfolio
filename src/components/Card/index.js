import giticon from '../../assets/giticon.svg';

function Card(props) {
    return(
        <div className="card">
            <a href={props.app} target="_blank" rel="noopener noreferrer">
            <p>{props.title}</p>
            <img src={`images/${props.image}`} alt="card" className="cardImage"/>
            </a>
            <div className="gitLinkContainer">
            <a href={props.github} target="_blank" rel="noopener noreferrer"><img src={giticon} alt="icon for github" className="gitLink"/></a>
            </div>
        </div>
    )
}

export default Card;