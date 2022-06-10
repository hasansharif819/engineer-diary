import React from 'react';
import pageNF from '../../Image/pageNF.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Page Not Found</h2>
            <img className='w-100' src={pageNF} alt="" />
        </div>
    );
};

export default NotFound;