import React, { useEffect, useState } from 'react';
import Client from '../Client/Client';

const Checkout = () => {
    const [clients, setClients] = useState([]);

    useEffect( () => {
        fetch('engineer.json')
        .then(res => res.json())
        .then(data => setClients(data))
    } ,[])
    return (
        <div>
            <h2 className='text-center text-primary'>Check out: {clients.length}</h2>
            <div className="row">
                {
                    clients.map(client => <Client
                        key={client.id}
                        client={client}
                    ></Client>)
                }
            </div>
        </div>
    );
};

export default Checkout;