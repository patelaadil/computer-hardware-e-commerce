import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './logo.png';

function Navbar() {
  return (
    <div className='Navbar'>
      {/* Logo */}
      <div>
        <img src={logo} width='150px' height='150px' alt="TechVault Logo"/>
      </div>

      {/* Main Links */}
      <ul className='Navbar-container'>
        <li className="Navbar-items"><Link to='/'>Home</Link></li>
        <li className="Navbar-items"><Link to='/product'>Products</Link></li>
      </ul>

      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search Products & Accessories..." 
          className="search-input" 
        />
        <button className="search-btn"><i className="fa fa-search"></i></button>
      </div> 

      {/* Right Side Links */}
      <ul className="Navbar-container">
        <li className="Navbar-items">
          <Link to='/cart' className="nav-icon-link">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </li>

        {/* Dropdown for Login/Register */}
        <li className="Navbar-items dropdown">
          <span className="nav-icon-link">
            <i className="fas fa-user"></i> Account <i className="fas fa-caret-down"></i>
          </span>
          <ul className="dropdown-menu">
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
          </ul>
        </li>
      </ul>     
    </div>
  );
}

export default Navbar;


