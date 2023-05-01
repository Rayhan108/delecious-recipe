import React from 'react';
import Header from '../../pages/Home/shared/Header/Header';
import NavigationBar from '../../pages/Home/shared/NavigationBar/NavigationBar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../pages/Home/shared/Footer/Footer';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
       <div>
       {
    navigation.state === "loading" ? <Spinner animation="border" />: ""
                }
       </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;