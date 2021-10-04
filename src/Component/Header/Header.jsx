import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className='navbar-brand'  to='/'>CourseMate <FontAwesomeIcon icon={faTypo3} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/home' className='nav-link ' >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/services' className='nav-link' >Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='nav-link' >About</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to='/contact' className='nav-link'>Contact us</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        </header>
    );
};

export default Header;