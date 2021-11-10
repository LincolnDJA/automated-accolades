import React from 'react';
import { BrowserRouter as Router, Link, } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div>
            <Router>
             <Link to="/"><button className='nav-item'>Home</button></Link>
             <Link to="/contact"><button className='nav-item'>Contact Us</button></Link> 
             <Link to="/about"><button className='nav-item'>About Us</button></Link> 
            </Router>   
            </div>
        </nav>
    );
};

export default NavBar;