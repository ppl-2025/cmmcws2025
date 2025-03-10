import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../src/assets/L1.png"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
      <Link to="/"> <img src={logo} alt="Logo" style={{ cursor: "pointer" }} /> </Link>
      </div>
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/events">Events</Link></li>
        {/* <li><Link to="/agenda">AGENDA</Link></li> */}
        <li><Link to="/speakers">Speakers</Link></li>
        <li><Link to="/host-regi">Exhibitors</Link></li>
        <li><Link to="/contact-us">About Us</Link></li>
      </ul>

      <button className="regi-btn" onClick={() => window.open("https://www.eventbrite.com/e/cmmc-west-summit-2025-tickets-1268110355209?aff=oddtdtcreator", "_blank")}>
  Register
</button>


    </nav>
  );
}

export default Navbar;
