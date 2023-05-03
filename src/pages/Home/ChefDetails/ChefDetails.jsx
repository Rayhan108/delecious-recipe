import React from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefDetails = () => {
  const chefDetail = useLoaderData();
  // console.log(chefDetail);
  const {
    chef_picture,
    chef_name,
    number_of_recipes,
    years_of_experience,
    like,
    recipes,
    bio,
  } = chefDetail;
  
  return (
    <div className="gray p-5">
      <Container fluid>
        <Row>
          <Col sm={12} lg={6} className="">
            <div className="p-4">
              <h1>
                {" "}
                <span className="orange fs-5">Hello, I am</span> <br />{" "}
                {chef_name}{" "}
              </h1>
              <p className="fs-4">{bio}</p>
            </div>
            <div className="mt-0 mb-5">
              <ListGroup  >
                <ListGroup.Item className="text-center">
                  <FaThumbsUp className="text-primary"></FaThumbsUp> {like}
                  Likes
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                 
                  Experience:{years_of_experience} Years
                </ListGroup.Item>
                <ListGroup.Item className="text-center">Recipes:{number_of_recipes}</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col sm={12} md={6} className="p-3 d-flex align-items-center">
            <Image className="circle" src={chef_picture} alt="Banner" fluid />
          </Col>
        </Row>
      </Container>
      <Row>
        {
recipes.map((recipe,idx)=><Recipe key={idx} recipe={recipe}></Recipe>)

        }
      </Row>
    </div>
  );
};

export default ChefDetails;
