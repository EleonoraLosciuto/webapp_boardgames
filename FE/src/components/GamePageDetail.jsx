import './GamePageDetail.css';

const GamePageDetail = (props) => {
    const { image, name, description } = props.game;
    return (
        <div className='boardgame-detail'>
            <figure>
                <img src={`http://localhost:3000/${image}`} alt={name} />
            </figure>
            <div className='description-boardgame-detail'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default GamePageDetail;