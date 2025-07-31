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

  useEffect(() => {
    const onScroll = () => {
      let found = "about";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 140) {
          found = sec.id;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sidebar">
      <ul>
        {sections.map((sec) => (
          <li key={sec.id}>
            <a
              href={`#${sec.id}`}
              className={active === sec.id ? "active" : ""}
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
