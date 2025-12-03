import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";      // if you create this
import Work from "./components/Work/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import AIAssistant from "./components/AIAssistant/AIAssistant";
import "./App.scss";

const App = () => (
  <div className="single-page-layout">
    <Sidebar />
    <main>
      <section id="about" className="section section-about">
        <Home />
      </section>
      <section id="skills" className="section section-skills">
        <Skills />
      </section>
      <section id="work" className="section section-work">
        <Work />
      </section>
      <section id="portfolio" className="section section-portfolio">
        <Portfolio />
      </section>
      <section id="contact" className="section section-contact">
        <Contact />
      </section>
      <footer className="footer">
        ©2025 Troy Lorents
      </footer>
    </main>
    <AIAssistant />
  </div>
);

export default App;
