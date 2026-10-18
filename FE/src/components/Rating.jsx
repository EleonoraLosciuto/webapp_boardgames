import './Rating.css';

const Rating = ({ rating }) => {
    const percentage = (rating / 5) * 100;

    return (
        <div className="rating-mask">

            <div className="empty-stars">
                <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
            </div>

            <div className="full-stars" style={{ width: `${percentage}%` }}>
                <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
        </div>
    )
}

export default Rating;