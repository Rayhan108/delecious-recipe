import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="mt-5 mb-5">
      <Form className="w-50 mx-auto">
        <h3 className="mb-5">Please Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button className="mb-2" variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text>
          Didn't have an account?Go <Link to="/register">Register</Link>
        </Form.Text>
     
      <div className="mt-3 mb-3">
        <div>
          <Button className="mt-2 mb-2" variant="outline-primary">
            <FaGoogle /> Login with Google
          </Button>
        </div>
        <div>
          <Button variant="outline-secondary">
            <FaGithub /> Login with github
          </Button>
        </div>
      </div>
      </Form>
    </Container>
  );
};

export default Login;
