import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    const { name, age, ratings, picture, text } = review;
    return (
        <div className="justify-content-center d-flex">
            <div className='review-card'>
                <img src={picture} alt="" />
                <div className='review-text'>
                    <h2 className='text-xl text-teal-800 font-semibold'>{name}</h2>
                    <p><small>Age: {age}</small></p>
                    <p><small>Ratings: {ratings}</small></p>
                    <p><small>{text}</small></p>
                </div>

            </div>
        </div>

    );
};

export default ReviewCard;