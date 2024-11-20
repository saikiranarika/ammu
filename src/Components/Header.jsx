import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Header.css";

const Header = ({ searchTerm, setSearchTerm }) => (
  <header className="header">
    <h1 className="logo">E-Commerce Site</h1>
   
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
    <div className="header-search">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </header>
);

export default Header;
