import './ReviewsDetail.css';
import ReviewCard from './ReviewCard';
import Rating from './Rating';

const ReviewDetails = (props) => {
    const { avg_rating, reviews } = props.game;

    return (
        <div className="reviews-section">
            <div className='review-heading'>
                <h2>Our community reviews</h2>
                <h3>Average:
                    {(avg_rating) ?
                        (<Rating rating={avg_rating} />)
                        : (" Nessuna recensione disponibile")
                    }
                </h3>
            </div>
            <div className="reviews">
                {
                    reviews.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))
                }
            </div>
        </div>
    )
};

export default ReviewDetails;