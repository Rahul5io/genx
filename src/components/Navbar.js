import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
        end // use end to match the exact path
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/invoices"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        Invoices
      </NavLink>
      <NavLink
        to="/reports"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        Reports
      </NavLink>

      <NavLink
        to="/manualjournal"
        className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
      >
        Manual Journal
      </NavLink>
      {/* Add more nav items as needed */}
    </nav>
  );
}

export default Navbar;
