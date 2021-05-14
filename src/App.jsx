import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Photos from "./Components/Pages/Photos";
import About from "./Components/Pages/About";
import SignUp from "./Components/Pages/SignUp";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signUp" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
