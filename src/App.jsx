/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Home />
        </div>
      </Router>
    </>
  );
}

export default App;
