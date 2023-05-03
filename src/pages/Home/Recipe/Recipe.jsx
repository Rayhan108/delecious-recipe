import React from "react";
import { Button, Card, Col } from "react-bootstrap";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaEye } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Recipe = ({ recipe }) => {
  console.log(recipe);
  const { recipe_name, cooking_method, ingredients, rating } = recipe;
  return (
    <Col>
      <Card style={{ height: "750px",padding:"10px" }}>
        <Card.Body>
          <Card.Title className="fs-4">{recipe_name}</Card.Title>
          <Card.Text>
            {" "}
            <span className="orange fw-bold">Cooking Method:</span> <br />{" "}
            {cooking_method}
          </Card.Text>

          <Card.Text className="fs-5">
            <span className="orange fw-bold">Ingredients:</span> <br />
            {ingredients.map((ingdint, idx) => (
              <li key={idx} ingdint={ingdint}>
                {ingdint}
              </li>
            ))}
          </Card.Text>
          <div className="d-flex">
            <Rating
              style={{ maxWidth: 100 }}
              value={Math.round(rating)}
              readOnly
            />
            <span className="ms-2"> {rating}</span>
          </div>
        </Card.Body>

        <Button className="fs-5">
          Add Favourite <FcLike className="fs-3"></FcLike>
        </Button>
      </Card>
    </Col>
  );
};

export default Recipe;
