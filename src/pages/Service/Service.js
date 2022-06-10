import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, serviceName, price, img, email } = service;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
                <div className="service">
                <img src={img} alt="" />
                <h4>Name: {name}</h4>
                <p>Service-Name: {serviceName}</p>
                <p>Price: ${price}</p>
                <p><small>Email: {email}</small></p>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Booking now</button>
                </Link>
                </div>
            </div>
    );
};

export default Service;