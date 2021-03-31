import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import "./styles.css";

const NavBar = () =>{
  return(
    <>

<div className="container-fluid nav_bg">
      <div className="row">
        <div className=" col-10 mx-auto">

        
<nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/">Harshdeep</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink 
        className="nav-link" 
        to="home"
        >Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" 
        to="about"
        activeClassName="menu_active">About</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" 
        to="services"
        activeClassName="menu_active">Services</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" 
        to="contact"
        activeClassName="menu_active">Contact Me</NavLink>
      </li> 
    </ul>
    
  </div>
</nav>
</div>
      </div>

      </div>
    </>
  );
}

export default NavBar;
