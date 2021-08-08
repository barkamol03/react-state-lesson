import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="main-navbar">
        <div className="nav">
          <div className="nav-title">
            <h1>Barkamol</h1>
          </div>
        </div>
        <div className="nav-items">
          <ul className='nav-links'>
            <li> <a href="#">Home</a> </li>
            <li> <a href="#">About</a> </li>
            <li> <a href="#">Portfolio</a> </li>
            <li> <a href="#">Contact</a> </li>
          </ul>
        </div>
      </div> 
    );
  }
}

export default Navbar;
