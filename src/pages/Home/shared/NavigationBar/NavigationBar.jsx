import React, { useContext } from "react";
import { Button, Container, Image, Nav,  Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";


const NavigationBar = () => {
    const {user,logout}=useContext(AuthContext)
    // console.log(user);
    const handleLogOut=()=>{
        logout()
        .then()
      .catch((error) => {
          console.log(error.message);
        });
    }
  return (
    <div>
      <Navbar
        className="  p-3 "
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand className="fs-2" href="#home">Delicious-Food-Recipe</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <NavLink className="text-decoration-none text-light fs-5  " to="/">
                Home
              </NavLink>

              <NavLink to="/blog" className="text-decoration-none ms-3 text-light fs-5">
                Blog
              </NavLink>
            </Nav>
            <Nav>
              <div className="me-3">
               {user &&    <Image  style={{height:'40px'}} src={user.photoURL} className="circle" />} 
            
              </div>
   
              { user ?  <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
        <Link to="/login"><Button variant="secondary">Login</Button></Link> 
        }
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
