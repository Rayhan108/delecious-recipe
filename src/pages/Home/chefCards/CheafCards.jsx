import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CheafCards = ({allChef}) => {
    console.log(allChef);
    const {chef_picture,chef_name,number_of_recipes,years_of_experience,like,chef_id} = allChef;
    return (
       
                <Col lg={4} md={6} sm={1} >
                <Card  style={{ height: "550px",padding:"10px",marginBottom:"15px" }} >
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
     
     <Card.Title className='fs-4'>{chef_name}</Card.Title>
        <Card.Text className='fs-5'>
       experience:{years_of_experience} year
        </Card.Text>
        <Card.Text className='fs-5'>
       Recipes:{number_of_recipes}
        </Card.Text>
        <Card.Text className='fs-5'>
        <FaThumbsUp className='text-primary'></FaThumbsUp> {like} Likes
        </Card.Text>

        <Link to={`/${chef_id}`}><Button variant="primary">View Recipes</Button></Link>
      </Card.Body>
    </Card>
                </Col>
                
      
    );
};

export default CheafCards;