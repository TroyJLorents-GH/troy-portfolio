import React, { useState, useEffect } from "react";
import "./Sidebar.scss";

// Section names and ids must match the section ids in App.jsx
const sections = [
  { id: "about", label: "Home/About" },
  { id: "skills", label: "Technical Skills" },
  { id: "work", label: "Work" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Sidebar = () => {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    const targetLine = window.innerHeight * 0.4; // 40% down the viewport
    let found = sections[0].id;
    for (const sec of sections) {
      const el = document.getElementById(sec.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= targetLine && rect.bottom >= targetLine) {
          found = sec.id;
        }
      }
    }
    // If scrolled to bottom, force Contact as active
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      found = "contact";
    }
    setActive(found);
  };
  window.addEventListener("scroll", onScroll);
  onScroll(); // call initially
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sidebar">
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </button>
      <ul className={menuOpen ? "open" : ""}>
        {sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className={active === sec.id ? "active" : ""}
              onClick={handleLinkClick}
            >
              {sec.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
