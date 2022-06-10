import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('engineers.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className='row'>
            <h2 className='container text-center text-primary'>Provided Service</h2>
            <div className="row">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;