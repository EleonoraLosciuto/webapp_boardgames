import './GamePageDetail.css';

const GamePageDetail = (props) => {
    const { image, name } = props.gamedetail;
    return (
        <div className='boardgame-detail'>
            <img src={`http://localhost:3000/${image}`} alt={name} />
            <div className='description-boardgame-detail'>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default GamePageDetail;