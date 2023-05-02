import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetail = useLoaderData()
    console.log(chefDetail);
    return (
        <div>
            <h1>chef details</h1>
        </div>
    );
};

export default ChefDetails;