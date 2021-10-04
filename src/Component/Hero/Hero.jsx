import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceCon } from '../../App';
import Banner from '../Banner/Banner';
import Service from '../Services/Service/Service';
import './Hero.css';

const Hero = () => {
    const service =useContext(ServiceCon)
    const sliceArr = service.slice(0,3)
    
    return (
        <>
            <Banner />
            <div className="container">
                <h1 className='text-center text-danger mt-5'>Services Section </h1>
                <div className="row py-5">
                    {
                        sliceArr.map(item => <Service key={item.id} service={item} />)
                    }
                </div>  
                <div className="text-center mb-3">
                    <Link to='/services' className='btn btn-danger'>Load More Coureses</Link>
                </div>
            </div>
        </>
    );
};

export default Hero;