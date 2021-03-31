import React from "react";

import Cards from "./Cards"
const Services = () =>{
  return(
    <>
    <div className="mt-5">
      <h1 className="text-center">My Works</h1>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
           <div className="row gy-5">
          
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
</div>
        </div>
      </div>

      </div>




    
</div>
    </>
  );
}

export default Services;
