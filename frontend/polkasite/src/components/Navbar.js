import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to='/background'>Background</NavLink>
    </div>
  )
};

export default Navbar;