import React from 'react';

const Service = (props) => {
    const {name,img,salary,available,subject} = props.service
    return (
        <div className="col-md-6 col-lg-4">
            <div class="card " style={{height:450}}>
                <img src={img} class="card-img-top " style={{height:226}} alt="name" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"> Subject: {subject}</p>
                    <p class="card-text"> Salary: {salary}</p>
                    <p class="card-text"> Available at {available}</p>
                    <div className='text-center'>
                        <a href="#tohere" className="btn btn-outline-danger"> Enroll Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;