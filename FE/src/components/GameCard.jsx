import './GameCard.css';
import { useParams } from "react-router";
import { useEffect } from 'react';

const GameCard = (props) => {
    const { name, image, description } = props.game;
    return (
        <div className="gamecard">
            <h3>{name}</h3>
            <figure><img src={`http://localhost:3000/${image}`} alt={name} /></figure>
            <p>{description}</p>
        </div>
    )
}

export default GameCard;