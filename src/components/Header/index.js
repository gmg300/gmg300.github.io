import React, { useState, useEffect } from "react";
import "./style.css";
import Nav from "../Nav";
import Sidenav from "../Sidenav";
import { useLocation } from "react-router-dom";

function Header() {
  const [label, setLabel] = useState("")
  const { pathname } = useLocation();

  useEffect(() => {
    function getLabel() {
      switch (pathname) {
        case "/projects":
          setLabel("Projects")
          break;
        case "/connect":
          setLabel("Connect")
          break;
        default:
          setLabel("Profile")
          break;
      }
    }
    getLabel();
  });

  return (
    <header>
      <Nav label={label}/>
      <Sidenav />
    </header>
  );
}

export default Header;
