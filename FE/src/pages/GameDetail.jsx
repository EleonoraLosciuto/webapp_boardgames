import './GameDetail.css';
import Loader from '../components/Loader';

// useParams, useEffect, useState, Axios
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

// components
import GamePageDetail from '../components/GamePageDetail';
import ReviewDetails from '../components/ReviewsDetail';


const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/boardgames/${id}`)
            .then(res => setGame(res.data))
            .catch(err => (console.error("boardgame detail: ", err)))
    }, [id]);

    if (!game) {
        return <Loader />;
    }

    return (
        <div className='boardgame-id-page'>
            <GamePageDetail game={game} />
            <ReviewDetails game={game} />
        </div>
    )
};
export default GameDetail;