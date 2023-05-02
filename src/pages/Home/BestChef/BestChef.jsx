import React from 'react';
import { Card, Carousel, Col } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestChef = ({chef}) => {
// console.log(chef);
const {chef_picture,chef_name,like} = chef;
    return (
              <Col lg={4} sm={1} >
                <Card >
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
     
     <Card.Title className='fs-4'>{chef_name}</Card.Title>
        <Card.Text className='fs-5'>
       <FaThumbsUp className='text-primary'></FaThumbsUp> {like} Likes
        </Card.Text>
        <Card.Text className='fs-5'>
        This chef's dishes are a work of art, bursting with flavor and executed with precision. A culinary genius!
        </Card.Text>
        <Link>Read More</Link>
      </Card.Body>
    </Card>
                </Col>
    );
};

export default BestChef;