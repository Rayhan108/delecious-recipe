import React from 'react';
import NavigationBar from '../../pages/Home/shared/NavigationBar/NavigationBar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../pages/Home/shared/Footer/Footer';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            <NavigationBar></NavigationBar>
           
       <div>
       {
    navigation.state === "loading" ? <Spinner  animation="border" variant="secondary" />: ""
                }
       </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;