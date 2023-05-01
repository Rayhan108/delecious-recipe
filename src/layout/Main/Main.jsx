import React from 'react';
import Header from '../../pages/Home/shared/Header/Header';
import NavigationBar from '../../pages/Home/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Home/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;