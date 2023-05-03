import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {loader,user} =useContext(AuthContext)
    const location = useLocation();

    if(loader){
        return <div className='d-flex justify-content-center mt-5 mb-5'><Spinner  animation="border" variant="secondary" /></div>
    }
    
      if (user) {
        return children;
      }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;