import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Login from "./Login";

function App() {
  return (
    <Router>
      <NavBar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          /* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <div className="main-container">
          <a href="https://react.dev" target="_blank">
            <img src="src/assets/image.png" className="logo react" alt="React logo" />
          </a>
          <h1>T.L.D.R</h1>
        </div>
      </>
    </Router>
  );
}

export default App;
