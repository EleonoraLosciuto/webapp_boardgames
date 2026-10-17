import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import './Homepage.css';

const Homepage = () => {
    // useState for Dashboard
    const [games, setGames] = useState([]);

    // useEffect for fetching data from backend - dependency array is empty as we only call the DB on mounting
    useEffect(() => {
        axios.get('http://localhost:3000/boardgames')
            .then((res) => (setGames(res.data)))
            .catch((err) => (console.error("fetching data error: ", err)));
    }, [])

    return (
        <div className="container">
            <h1>Boardgames repository</h1>
            <h2>Offline nerds community</h2>
            <div className="dashboard grid">
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}

export default Homepage;