import React from "react";
import "./styles.css";
import {Switch ,Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services  from "./Services";
import NavBar from "./NavBar";

export default function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>

    </>
  );
}
