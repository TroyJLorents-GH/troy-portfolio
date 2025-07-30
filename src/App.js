import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          ©2025 troy.j.lorents@gmail.com
        </footer>
      </div>
    </div>
  );
}

export default App;
