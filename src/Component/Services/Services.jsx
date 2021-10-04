import React, { useContext } from 'react';
import { ServiceCon } from '../../App';
import Service from './Service/Service';


const Services = () => {
    const service = useContext(ServiceCon)
    
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1 className="d-flex justify-content-center align-items-center flex-column"> Explore you Passion ! </h1>
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