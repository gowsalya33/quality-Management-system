import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
     <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
        <NavLink to='/user'>User</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        </nav>  
    </div>
  );
}
export default Navbar;
