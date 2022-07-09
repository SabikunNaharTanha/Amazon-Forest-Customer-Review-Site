import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../../Hook/Footer/Reviews/Reviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = Reviews();

    return (
        <div>
            <div className='home'>
                <div className="details-container">
                    <h1 className='text-3xl font-bold text-rose-800 mb-5'>Amazon Forest Customer Review Site</h1>
                    <p className='text-lg text-gray-800'>Amazon Forest Customer Review is a site to show the customer satisfaction level for our company through their reviews. Explore the reviews and connect with us to travel the world!</p>
                    <Link to='/about'>
                        <button className='p-3 bg-slate-200 rounded-lg m-3 text-rose-900 text-lg font-semibold'>Learn More</button>
                    </Link>
                </div>
                <div className="image-container">
                    <img src={'Home.jpg'} alt="" />

                </div>
            </div>
            <h1 className='text-2xl font-bold text-rose-800'>Customer Review</h1>
            <div className='review-container'>
                {
                    reviews.map(review =>

                        <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                }
            </div>

        </div>
    );
};

export default Home;