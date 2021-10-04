import React, { useContext } from 'react';
import { ServiceCon } from '../../App';
import Service from './Service/Service';


const Services = () => {
    const service = useContext(ServiceCon)
    
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 my-md-auto">
                    <h1> Explore you Passion ! </h1>
                    <blockquote>
                    “Research shows that you begin learning in the womb and go right on learning until the moment you pass on. Your brain has a capacity for learning that is virtually limitless, which makes every human a potential genius.” – Michael J. Gelb
                    </blockquote>
                </div>
                <div className="col-md-6">
                    <img src="images/services.svg" alt="a girl explore their passion " className="img-fluid" />
                </div>
            </div>
            <div className="row g-4 my-5">
                {
                    service.map(item => <Service key={item.id} service={item} />)
                }
            </div>
        </div>
    );
};

export default Services;