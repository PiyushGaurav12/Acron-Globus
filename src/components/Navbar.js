import React from "react";
import { FaSearch, FaCommentAlt, FaTrophy, FaUserCircle } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    {/* StackOverflow Logo */}
    <div className="logo">
      <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg" alt="StackOverflow Logo" />
    </div>

    {/* Search Bar */}
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-bar" />
      <FaSearch className="search-icon" />
    </div>

    {/* Navbar Icons */}
    <div className="navbar-icons">
      <FaCommentAlt title="Comments" className="navbar-icon" />
      <FaTrophy title="Achievements" className="navbar-icon" />
      <FaUserCircle title="Profile" className="navbar-icon" />
    </div>
  </nav>
);

export default Navbar;
