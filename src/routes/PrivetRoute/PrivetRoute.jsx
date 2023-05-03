import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {loader,user} =useContext(AuthContext)
    const location = useLocation();

    if(loader){
        return <Spinner  animation="border" variant="secondary" />
    }
    
      if (user) {
        return children;
      }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;