import React from "react";
import web2 from "./web2.jpg";
const Cards = () =>{
  return(
    <>
    <div className="col-md-4 col-10 mx-auto">
    <div className="card">
  <img className="card-img-top" src={web2}  alt="this are cards"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    </>
  );
}

export default Cards;
