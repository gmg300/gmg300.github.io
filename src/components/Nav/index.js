import React, { useState, useEffect } from "react";
import "./style.css";


function Nav({label}) {
  const [title, setTitle] = useState("")
  
  // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  useEffect(() => {
    function getTitle() {
      if (window.innerWidth <= 768) {
        setTitle(`G G`);
      } else {
        setTitle(`GARRETT GASSENSMITH`);
      }
    }
    getTitle()
    window.addEventListener('resize', getTitle)
  })
 
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="brand-logo center">{title}</div>
        <div data-target="trigger" className="sidenav-trigger show-on-large">
          <i className="fas fa-bars"></i>
            <span className="location-label">{label}</span>
        </div>
        <ul id="nav-mobile" className="right">
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
