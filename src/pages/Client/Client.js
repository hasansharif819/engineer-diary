import React from 'react';

const Client = ({client}) => {
    const {name, email, review, img, ratings} = client;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="service">
                <img src={img} alt="" />
            <h6>Name: {name}</h6>
            <p>Email: {email}</p>
            <small>Review: {review}</small>
            <br />
            <small>Ratings: {ratings}</small>
            </div>
        </div>
    );
};

export default Client;