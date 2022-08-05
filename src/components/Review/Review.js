import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Review.css';

const Review = ({ review }) => {
    const { picture, name, ratings, age, text } = review;
    return (
        <div className="review-container">
            <div className='reviews'>
                <img src={picture} alt="" />
                <h3 className='font-semibold text-lg text-pink-800'>{name}</h3>
                <p><small>Age: {age}</small></p>
                <p><small>Ratings: {ratings}</small></p>
                <p><small>
                    {text.length > 50 ? text.slice(0, 50) + '...' : text}
                </small></p>
                <CustomLink to='/customerReview'>
                    <button className='p-2 bg-slate-200 rounded-lg m-3 text-rose-900 text-lg font-semibold'>See All Reviews</button>
                </CustomLink>

            </div>
        </div>

    );
};

export default Review;