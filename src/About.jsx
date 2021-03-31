import React from "react";
import {Link} from "react-router-dom";
const About = () =>{
  return(
    <>
    <div className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <Link className="btn btn-outline-success" to="contact" role="button">Contact Me</Link>
  </p>
</div>
    </>
  );
}

export default About;
