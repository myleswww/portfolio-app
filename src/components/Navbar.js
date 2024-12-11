import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";

import About from "./AboutMe";
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from "./Contact";

const Navbar = () => {
    //POPUP BOXES
    const openpopupboxAboutMe = () => {
      const content = (
        <>
        <div className = "popup-nav"><About /></div>
        </>
      )

      PopupboxManager.open({content});
    }

    const popupboxaboutMeConfig = {
      titleBar:{
        enable: true,
        text: "C:/people/myles-wright/about_me.exe",
        className: "title-bar",
        closeButtonClassName: "close-button",
        closeText: "!"
    },
    overlayOpacity: 0,
    fadeIn: true,
    fadeInSpeed: 500
    }

    const openpopupboxExperience = () => {
      const content = (
        <>
        <div className = "popup-nav"><Experience /></div>
        </>
      )

      PopupboxManager.open({content});
    }

    const popupboxExperienceConfig = {
        titleBar:{
          enable: true,
          text: "C:/people/myles-wright/experience.exe",
          className: "title-bar",
          closeButtonClassName: "close-button"
      },
      overlayOpacity: 0,
      fadeIn: false,
      fadeInSpeed: 500
      }
    
      const openpopupboxPortfolio = () => {
        const content = (
          <>
            <div className = "popup-nav"><Portfolio /></div>
          </>
        )

        PopupboxManager.open({content});
      }

      const popupboxPortfolioConfig = {
        titleBar:{
          enable: true,
          text: "C:/people/myles-wright/portfolio.exe",
          className: "title-bar",
          closeButtonClassName: "close-button"
      },
      overlayOpacity: 0,
      fadeIn: false,
      fadeInSpeed: 500
      }

      const openpopupboxContact = () => {
        const content = (
          <>
            <div className = "popup-nav"><Contact /></div>
          </>
        )

        PopupboxManager.open({content});
      }


      const popupboxContactConfig = {
        titleBar:{
          enable: true,
          text: "C:/people/myles-wright/contact.exe",
          className: "title-bar",
          closeButtonClassName: "close-button"
      },
      overlayOpacity: 0,
      fadeIn: true,
      fadeInSpeed: 500
      }


     
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Myles Wright</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#FF4365"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      
      <li className="nav-item">
      
        
      <Link smooth= {true} to="about" className="nav-link" href="#" onClick = {openpopupboxAboutMe}>About Me</Link>
      </li>

      <li className="nav-item">
        <Link smooth= {true} to="experience" className="nav-link" href="#" onClick = {openpopupboxExperience}>Experience</Link>
      </li>

      <li className="nav-item">
        <Link smooth= {true} to="portfolio" className="nav-link" href="#" onClick = {openpopupboxPortfolio}>Portfolio</Link>
      </li>

      <li className="nav-item">
        <Link smooth= {true} to="contact" className="nav-link" href="#" onClick = {openpopupboxContact}>Contact Me</Link>
      </li>
    </ul>
    
  </div>

</nav>
<PopupboxContainer {...popupboxaboutMeConfig} />
<PopupboxContainer {...popupboxExperienceConfig} />
<PopupboxContainer {...popupboxPortfolioConfig} />
<PopupboxContainer {...popupboxContactConfig} />
</div>
    )
}

export default Navbar
