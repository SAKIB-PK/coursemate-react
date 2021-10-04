import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='py-5 bg-dark'>
      <section className='text-center text-white container'>
        <h2>
          Join the Adventure newsletter to receive our best vacation deals
        </h2>
        <p>
          You can unsubscribe at any time.
        </p>
        <div class="input-group w-50 mx-auto mb-3">
            <input type="text" className="form-control" placeholder="Recipient's Email Name" aria-label="Email Name" aria-describedby="button-addon2"/>
            <button className="btn btn-danger" type="button" id="button-addon2">Button</button>
        </div>
      </section>
      <div className='row text-white justify-content-center'>
          <div className='col-md-3'>
            <h2>Contact Us</h2>
            <Link to='/'className='nav-link'>Contact</Link>
            <Link to='/'className='nav-link'>Support</Link>
            <Link to='/'className='nav-link'>Destinations</Link>
            <Link to='/'className='nav-link'>Sponsorships</Link>
          </div>
          <div className='col-md-3'>
            <h2>Social Media</h2>
            <Link to='/' className='nav-link'>Instagram</Link>
            <Link to='/'className='nav-link'>Facebook</Link>
            <Link to='/'className='nav-link'>Youtube</Link>
            <Link to='/'className='nav-link'>Twitter</Link>
          </div>
      </div>
      <div className="row">
          <p className="text-center text-muted">Coursemate &copy; 2020-2021</p>
      </div>
    </div>
  );
}

export default Footer;
