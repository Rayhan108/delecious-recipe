import React from 'react';
import Header from '../../pages/Home/shared/Header/Header';
import NavigationBar from '../../pages/Home/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Home/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;