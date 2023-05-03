import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetail = useLoaderData()
    console.log(chefDetail);
    const {chef_picture,chef_name,number_of_recipes,years_of_experience,like,chef_id,bio} =chefDetail;
    return (
        <div className='gray p-5'>
         <Container fluid>
      <Row>
        <Col sm={12} lg={6} className="">
          <div className="p-4">
            <h1> <span className='orange fs-5'>Hello, I am</span> <br /> {chef_name}  </h1>
            <p className='fs-4'>{bio}</p>
          </div>
          <div className=''>
            <p className='fs-5'><FaThumbsUp className='text-primary'></FaThumbsUp> {like} Likes</p>
            <p className='fs-5'> Experience:{years_of_experience} Years</p>
            <p className='fs-5'> Recipes:{number_of_recipes}</p>
          </div>
        </Col>
        <Col sm={12} md={6} className="p-3 d-flex align-items-center">
          <Image className='circle' src={chef_picture} alt="Banner" fluid />
        </Col>
      </Row>
    </Container>
          
          
        </div>
    );
};

export default ChefDetails;