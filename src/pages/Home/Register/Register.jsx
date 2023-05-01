import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const {createUser} =useContext(AuthContext)
    console.log(createUser);
    return (
        <Container className='mt-5 mb-5'>
      
        <Form className='w-50 mx-auto'>
        <h3 className='mb-5'>Please Register</h3>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Your Name" required />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhoto">
    <Form.Label>Photo Url</Form.Label>
    <Form.Control type="text" name="photo" placeholder="Photo Url" required  />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" required  />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" required />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Accept all terms & condition" />
  </Form.Group>
  <Button  className='mb-2' variant="primary" type="submit" >
   Register
  </Button>
  <br />
  <Form.Text>
    Already have an account?Go <Link to="/login">Login</Link>
  </Form.Text>

</Form>
    </Container>
    );
};

export default Register;