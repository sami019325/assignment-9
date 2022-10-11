import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const Navbar = () => {
    return (
        <div className='nav_Container'>
            <div>
                <h1>Queza</h1>
            </div>
            <div className='nav_Bar'>
                <Link to='/'>Topics</Link>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;