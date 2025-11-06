import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './logo.png';

function Navbar() {
  return (
    <div>
      <div>
      <div className='Navbar'>
        <div>
          <img src={logo} width='150px' height='150px' alt="TechVault Logo"/>
        </div>

        <ul className='Navbar-container'>
          <li className="Navbar-items"><Link to='/home'>Home</Link></li>
          <li className="Navbar-items"><Link to='/product'>Products</Link></li>
        </ul>

        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search Products & Accessories..." 
            className="search-input" 
          />
          <button className="search-btn"><i className="fa fa-search"></i></button>
        </div> 

        <ul className="Navbar-container">
          <li className="Navbar-items">
            <Link to='/cart' className="nav-icon-link">
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>
          </li>

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
        <div className='CategoriesNavbar'>
        <ul className='Categories-container'>
          <li className='Category-item'><Link to='/mouse'>Mouse</Link></li>
          <li className='Category-item'><Link to='/keyboard'>Keyboard</Link></li>
          <li className='Category-item'><Link to='/HDD'>HDD</Link></li>
          <li className='Category-item'><Link to='/SSD'>SSD</Link></li>
          <li className='Category-item'><Link to='/RAM'>RAM</Link></li>
          <li className='Category-item'><Link to='/webcam'>Webcam</Link></li>
          <li className='Category-item'><Link to='/graphics'>Graphics Card</Link></li>
          <li className='Category-item'><Link to='/headset'>Headset</Link></li>
        </ul>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
