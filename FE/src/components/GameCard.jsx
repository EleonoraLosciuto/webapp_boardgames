import './GameCard.css';
import { Link } from 'react-router';

const GameCard = (props) => {
    const { name, image, description, id } = props.game;
    return (
        <Link className="gamecard" to={`/${id}`}>
            <h3>{name}</h3>
            <figure><img src={`http://localhost:3000/${image}`} alt={name} /></figure>
            <p>{description}</p>
        </Link>
    )
}

export default GameCard;