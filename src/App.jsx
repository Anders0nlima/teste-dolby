import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./comp/NavBar";
import TesteUm from "./pages/testeUm";
import TesteDois from "./pages/testeDois";
import TesteTres from "./pages/testeTres";


function App() {
  return (
    <>
    <Router>
    <NavBar/>
      <Routes>

        <Route path="/" element={<TesteUm/>}>

        </Route>
        <Route path="/testeDois" element={<TesteDois/>}>
        
        </Route>
        <Route path="/testeTres" element={<TesteTres/>}>
        
        </Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;