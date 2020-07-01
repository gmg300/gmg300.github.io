import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Sidenav() {
  return (
    <ul className="sidenav" id="trigger">
      <li>
        <Link
          className="sidenav-close label strike"
          data-text="Profile"
          to="/profile">
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <Link
          className="sidenav-close label strike"
          data-text="Projects"
          to="/projects"
        >
          <span>Projects</span>
        </Link>
      </li>
      <li>
        <Link
          className="sidenav-close label strike"
          data-text="Connect"
          to="/connect"
        >
          <span>Connect</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidenav;
