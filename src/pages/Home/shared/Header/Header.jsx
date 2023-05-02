import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='background' >
            
           <div className=' mb-2 '>
         <div className='my-auto mx-auto ms-0  p-5 text-right w-50  ' >
         <h1 className='fs- mb-2 '>Welcome to our <br /> <span className='orange'>Delicious Food Recipe</span> <br /> Website</h1>
            <p className='mt-1 fs-5'>We represent <span className='text-black fs-3'>Bangali</span>  delicious food.We are passionate about sharing the diverse and delicious cuisine of Bangladesh with food lovers around the world.</p>
            
         </div>
         <div>
            {/* <img className='img-fluid justify-content-center align-items-center mt-5' src="https://img.freepik.com/free-photo/delicious-indian-food-tray-flat-lay_23-2148723508.jpg?w=900&t=st=1683008389~exp=1683008989~hmac=7c3a56775eb4e95f7a668a6201487c8d874c4af1c2033d83307dedf06a6f26e1" alt="" /> */}
         </div>
        </div>
        </div>
    );
};

export default Header;