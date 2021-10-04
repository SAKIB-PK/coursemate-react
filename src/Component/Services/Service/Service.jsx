import React from 'react';

const Service = (props) => {
    const {name,img,salary,available,subject} = props.service
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card " style={{height:450}}>
                <img src={img} className="card-img-top " style={{height:226}} alt="name" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> Subject: {subject}</p>
                    <p className="card-text"> Salary: {salary}</p>
                    <p className="card-text"> Available at {available}</p>
                    <div className='text-center'>
                        <a href="#tohere" className="btn btn-outline-danger"> Enroll Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;