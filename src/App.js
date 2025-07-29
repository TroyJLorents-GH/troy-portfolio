import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
// Import your other page components here...

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="page-content" style={{ marginLeft: 80, minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<div>Home Coming Soon</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<div>Work (Resume/Experience) Coming Soon</div>} />
          <Route path="/portfolio" element={<div>Portfolio/Projects Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Coming Soon</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
