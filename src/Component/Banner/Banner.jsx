import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center flex-column text-start">
                    <h1>Learn your own Speed </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempore velit? Impedit obcaecati neque assumenda.</p>
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