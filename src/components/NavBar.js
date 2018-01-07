import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar col-md-8 col-md-offset-2">
    LOGO  
      <NavLink to="/">Home</NavLink>
      <NavLink to="/players">Players</NavLink>
      <NavLink to="/tricks">Tricks</NavLink>
      <NavLink to="/actors">Score</NavLink>
    </div>

  );
};

export default NavBar;
