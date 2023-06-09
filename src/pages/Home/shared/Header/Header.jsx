import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='background' >
            <Container fluid>
<Row>
   <Col sm={12} lg={6} className="d-flex align-items-center">
   <div className=' p-4'>
         <div className='' >
         <h1 className='fs- mb-2 '>Welcome to our <br /> <span className='orange'>Delicious Food Recipe</span> <br /> Website</h1>
            <p className='mt-1 fs-5'>We represent <span className='text-black fs-3'>Bangali</span>  delicious food.We are passionate about sharing the diverse and delicious cuisine of Bangladesh with food lovers around the world.</p>
            
         </div>
        </div>
   </Col>
   <Col sm={12} md={6} className="p-3">
   
            <Image   className='img-fluid justify-content-center align-items-center mt-5' src="https://img.freepik.com/free-photo/delicious-indian-food-tray-flat-lay_23-2148723508.jpg?w=900&t=st=1683008389~exp=1683008989~hmac=7c3a56775eb4e95f7a668a6201487c8d874c4af1c2033d83307dedf06a6f26e1" alt="" 
            
            
            />
        
   </Col>
</Row>
            </Container>
       
        </div>
    );
};

export default Header;