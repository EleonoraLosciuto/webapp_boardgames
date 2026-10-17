import './GameDetail.css';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GamePageDetail from '../components/GamePageDetail';


const GameDetail = () => {
    const { id } = useParams();
    const [game, setGame] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/boardgames/${id}`)
            .then(res => setGame(res.data))
            .catch(err => (console.error("boardgame detail: ", err)))
    }, [id]);

    if (!game) {
        return <div className="loading">Caricamento dettagli in corso...</div>;
    }

    return (
        <div className='boardgame-detail'>
            <GamePageDetail game={game} />
        </div>
    )
};
export default GameDetail;