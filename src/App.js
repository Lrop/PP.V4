import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
// import { Switch } from "react-router-dom";
// import { Router } from "express";

function App() {
  return (
    <div className="App">
      <Nav />

      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
