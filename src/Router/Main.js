import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer1 from '../Components/Footer/Footer1';
import Nav from '../Components/Nav';

const Main = () => {
    return (
        <div>
            <div>
                
                <Outlet></Outlet>
            </div>
            <Footer1></Footer1>
        </div>
    );
};

export default Main;