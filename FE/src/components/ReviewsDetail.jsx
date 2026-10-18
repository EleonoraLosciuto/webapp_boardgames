import './ReviewsDetail.css';
import ReviewCard from './ReviewCard';

const ReviewDetails = (props) => {
    const { avg_rating, reviews } = props.game;

    return (
        <div className="reviews-section">
            <div className='review-heading'>
                <h3>Our community review</h3>
                <h3>Average:
                    {(avg_rating) ?
                        (` ${avg_rating}`)
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