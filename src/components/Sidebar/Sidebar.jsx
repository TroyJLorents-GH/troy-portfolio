import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
  faBriefcase,
  faFilePdf // <-- PDF here!
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./Sidebar.scss";

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" to="/" activeclassname="active">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink to="/work" activeclassname="active">
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink to="/portfolio" activeclassname="active">
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/troy-lorents/">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/TroyJLorents-GH">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="mailto:troy.j.lorents@gmail.com" title="Email">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="/assets/Troy Lorents_225_Resume.pdf" title="Resume">
          <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
