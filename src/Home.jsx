import React from "react";
import "./styles.css";
import web1 from "./web1.svg.jpg";
import {NavLink} from "react-router-dom";

const Home = () =>{
  return(
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h2>Hello Guys <strong className="brand-name">Welcome To My Page</strong></h2>
            <h3 className="my-4">
              This Page Is Build Using HTML CSS  React and Bootstrap</h3>
              <div className="mt-3">
                <NavLink to="services" className="btn btn-outline-primary">Get Started</NavLink>
                </div>
            </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web1} className="img-fluid animated" alt="brand-img" />
                
                </div>
                </div>
        </div>
      </div>

      </div>
      </section>
    </>
  );
}

export default Home;
