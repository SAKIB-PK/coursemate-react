import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
    return (
        <div className ='hero-section'>
            <Header />
            <Banner />
        </div>
    );
};

export default Hero;