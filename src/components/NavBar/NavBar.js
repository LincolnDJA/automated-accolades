import React from 'react';

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div>
              <button className='nav-item'>Home</button>
              <button className='nav-item'>Contact Us</button>
              <button className='nav-item'>Admin Sign In</button>
            </div>
        </nav>
    );
};

export default NavBar;