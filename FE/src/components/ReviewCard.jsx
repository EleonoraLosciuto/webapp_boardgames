import './ReviewCard.css';

const ReviewCard = (props) => {
    const { username, feedback, rating } = props.review
    return (
        <div className="review-box">
            <div className="text">{feedback}</div>
            <div className="rating">Vote: {rating}</div>
            <div className="name"><span id='by'>by</span> {username}</div>
        </div>
    )
};

export default ReviewCard;