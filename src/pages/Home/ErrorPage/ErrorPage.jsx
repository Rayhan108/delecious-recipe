import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
                <Container className="mt-5">
      <Row>
        <Col sm={12}  md={6} className="mb-4">
          <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683118539~exp=1683119139~hmac=a0035ca7af37323c10d996d9317ff853e43b3446667a3306eb52167d8507a975" alt="404 Error" className="img-fluid" />
        </Col>
        <Col sm={12} md={6} className='my-auto'>
          <h1 className="mb-4">{error.statusText}</h1>
          <p className="mb-4">{error.message}</p>
          <Link to="/"><Button className="primary" >Go back to home</Button></Link>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default ErrorPage;