import React from 'react';
import Reviews from '../../Hook/Footer/Reviews/Reviews';
import Review from '../Review/Review';
import './CustomerReview.css'

const CustomerReview = () => {
    const [reviews, setReviews] = Reviews();
    return (
        <div className='Customer-review'>
            <h1 className='m-20 text-3xl font-bold text-rose-800'>Customer Reviews</h1>

            <div className='review-box'>
                {
                    reviews.map(review => <Review key={review.id}
                        review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default CustomerReview;