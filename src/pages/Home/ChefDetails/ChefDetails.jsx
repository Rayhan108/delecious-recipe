import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetail = useLoaderData()
    console.log(chefDetail);
    const {chef_picture,chef_name,number_of_recipes,years_of_experience,like,chef_id,bio} =chefDetail;
    return (
        <div>
            <h1>{chef_name}</h1>
        </div>
    );
};

export default ChefDetails;