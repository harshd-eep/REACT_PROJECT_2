import React from "react";
import "./styles.css";
const Contact = () =>{
  return(
    <>
    <div className="my-5 theform">
      <h1 className="text-center"> Contact Me </h1></div>
      <div className="container">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={()=>{alert("Form Submited \nThanks For Wisting The Page")}}>

    <div className="form-group">
    <label>Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
      <label>Phone Number</label>
      <input type="tel" class="form-control" id="inputZip" placeholder="123-456-789-0" />
    </div>

  <div class="form-group">
    <label>Your Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-outline-secondary">Submit</button>
</form>
        </div>
      </div>

      </div>

    </>
  );
}

export default Contact;
