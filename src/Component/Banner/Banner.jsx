import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 my-md-auto">
                    <h1>Learn your own Speed </h1>
                    <blockquote className='text-muted'>
                    “One hour per day of study in your chosen field is all it takes. One hour per day of study will put you at the top of your field within three years. Within five years you’ll be a national authority. In seven years, you can be one of the best people in the world at what you do.” – Earl Nightingale
                    </blockquote>
                    <Link to='/services' className='btn btn-outline-primary'>Explore More</Link>
                </div>
                <div className="col-md-6">
                    <img src="images/study_girl.svg" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Banner;