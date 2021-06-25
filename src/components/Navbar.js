import React from "react";
import logo from "../brain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

  <a className="navbar-brand" href="#">Myles Wright</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#FF4365"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link smooth= {true} to="home"className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth= {true} to="about" className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth= {true} to="experience" className="nav-link" href="#">Experience</Link>
      </li>
      <li className="nav-item">
        <Link smooth= {true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link smooth= {true} to="contact" className="nav-link" href="#">Contact Me</Link>
      </li>
    </ul>
    
  </div>

</nav>
    )
}

export default Navbar
