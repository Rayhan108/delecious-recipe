import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheafCards = ({allChef}) => {
    console.log(allChef);
    const {chef_picture,chef_name,number_of_recipes,years_of_experience,like,chef_id} = allChef;
    return (
        <div>
            <Row >
                <Col lg={3}>
                <Card >
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
        <Card.Title>{chef_name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/${chef_id}`}><Button variant="primary">View Recipes</Button></Link>
      </Card.Body>
    </Card>
                </Col>
                
            </Row>
   
            
        </div>
    );
};

export default CheafCards;