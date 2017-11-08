import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Players</NavLink>
      <NavLink to="/directors">Tricks</NavLink>
      <NavLink to="/actors">Score</NavLink>
    </div>
  );
};

export default NavBar;