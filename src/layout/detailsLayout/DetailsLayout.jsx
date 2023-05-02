import React from 'react';
import NavigationBar from '../../pages/Home/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Home/shared/Footer/Footer';

const DetailsLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DetailsLayout;