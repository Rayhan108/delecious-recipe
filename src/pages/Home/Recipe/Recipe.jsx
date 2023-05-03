import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { FcLike } from "react-icons/fc";

const Recipe = ({ recipe }) => {
  // console.log(recipe);
  const [recipeId, setRecipeId] = useState([]);
  const { recipe_name, cooking_method, ingredients, rating, id } = recipe;
  const handleFvrt = (id) => {
    // console.log(id);
    setRecipeId([...recipeId, id]);
   
    if (recipeId) {
      toast("Added Favourite!");
    } 
  };
  return (
    <Col>
      <Card style={{ height: "750px", padding: "10px", marginBottom: "15px" }}>
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

        <Button
          onClick={() => handleFvrt(id)}
          disabled={recipeId == id}
          className="fs-5"
        >
          Add Favourite <FcLike className="fs-3"></FcLike>
        </Button>
        <ToastContainer></ToastContainer>
      </Card>
    </Col>
  );
};

export default Recipe;
