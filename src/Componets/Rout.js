import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar/Navbar';

const Rout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
        </div>
    );
};

export default Rout;