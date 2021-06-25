import React from "react";
import autismapp from "../river.png";
import autismPhoto from "../autism-app.png";
import rasp from "../Raspberry_Pi_4_Model_B_-_Side.jpg";
import client from "../clients-icon-png-21.jpg";
import server from "../python-server.jpg";
import github from "../github.jpg";
//Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//react popup imports
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //autism app
    const openPopupboxAutism = () => {
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={autismPhoto} alt = "autism app"/>
                <p>An app made for Riverside Middle School to help children on the Autistic Spectrum with Emotion Regulation.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.butler.edu/mbwright/RiversideIOS")}>https://github.butler.edu/mbwright/RiversideIOS</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigAutism = {
        titleBar:{
            enable: true,
            text: "IOS Autism Therapy App Using Swift" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    //POPUPBOX CARD READER
    const openPopupboxCard = () => {
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={rasp} alt = "Card reader app..."/>
                <p>An app made while interning for Butler University IT for safe event check-in during the Covid-19 pandemic.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/myleswww/card-service")}>https://github.com/myleswww/card-service</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigCard = {
        titleBar:{
            enable: true,
            text: "Event Check In Card Reader using Python and REST API with Flask on a Raspberry Pi." 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //POPUPBOX CLIENT APPLICATION
    const openPopupboxClient = () => {
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={client} alt = "Client app..."/>
                <p>A fully functional web client made using Python. Thanks Nate Partenheimer!</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/myleswww/http_client")}>https://github.com/myleswww/http_client</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigClient= {
        titleBar:{
            enable: true,
            text: "Python Web Client" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //PYTHON WEB SERVER POPUPBOX
    const openPopupboxServer = () => {
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={server} alt = "Server app..."/>
                <p>A fully functional web server made using Python. Made with Nicole Selig. Go check her out! <a className="hyper-link" onClick={() => window.open("https://github.com/NicoleSelig")}>https://github.com/NicoleSelig</a></p>
                
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/myleswww/http_client")}>https://github.com/myleswww/http_client</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigServer= {
        titleBar:{
            enable: true,
            text: "Python Web Server" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //GITHUB POPUP BOX
    const openPopupboxGit = () => {
        const content =(
            <>
                <img className="portfolio-image-popupbox" src={github} alt = "Github..."/>
                <p>Other projects that I have not included here!</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/myleswww")}>https://github.com/myleswww</a>
            </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigGit= {
        titleBar:{
            enable: true,
            text: "Other Github Projects" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-center py-5">
                    Portfolio
                </h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxAutism}>
                        <img className="portfolio-image" src={autismapp} alt="Autism Therapy app..."></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                {/*-*/}
                
                    <div className="portfolio-image-box" onClick={openPopupboxCard}>
                        <img className="portfolio-image" src={rasp} alt="Raspberry Pi Card Scanner..."></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                {/*-*/}
                
                    <div className="portfolio-image-box" onClick={openPopupboxClient}>
                        <img className="portfolio-image" src={client} alt="Client Application..."></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                {/*-*/}
                
                    <div className="portfolio-image-box" onClick={openPopupboxServer}>
                        <img className="portfolio-image" src={server} alt="Server Application..."></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
                {/*-*/}
                    
                    <div className="portfolio-image-box" onClick={openPopupboxGit}>
                        <img className="portfolio-image" src={github} alt="Github Projects..."></img>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                
            </div>
        </div>
        <PopupboxContainer {...popupboxConfigAutism} />
        <PopupboxContainer {...popupboxConfigCard} />
        <PopupboxContainer {...popupboxConfigClient} />
        <PopupboxContainer {...popupboxConfigServer} />
        <PopupboxContainer {...popupboxConfigGit} />
    </div>
        
    )
}

export default Portfolio
