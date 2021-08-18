import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink exact to='/' className="navlink" >Home</NavLink>
      <NavLink to='/background' className="navlink">Background</NavLink>
    </div>
  )
};

export default Navbar;