import React from 'react';
import { BrowserRouter as Router, Link, } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div>
            <Router>
             <a href='/'><button className='nav-item'>Home</button></a>
             <a href="/contact"><button className='nav-item'>Contact Us</button></a> 
             <a href="/about"><button className='nav-item'>About Us</button></a> 
            </Router>   
            </div>
        </nav>
    );
};

export default NavBar;