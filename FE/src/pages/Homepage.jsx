import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import './Homepage.css';

const Homepage = () => {
    // useState for Dashboard
    const [dashboard, setDashboard] = useState([]);

    // useEffect for fetching data from backend - dependency array is empty as we only call the DB on mounting
    useEffect(() => {
        axios.get('http://localhost:3000/boardgames')
            .then((res) => (setDashboard(res.data)))
            .catch((err) => (console.error("fetching data error: ", err)));
    }, [])

    return (
        <div className="dashboard">
            {dashboard.map(game => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    )
}

export default Homepage;