import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div id="home" className ="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm Myles!</h1>
                <Typed
                    className="typed-text"
                    strings={["React", "Javascript", "Laravel", "PHP", "Magento 2", "Integration Development", "Python", "Frontend Design", "RESTful APIs", "Agile Development", "Database Development", "Full Stack Development"]}
                    typeSpeed={40}
                    backSpeed={80}
                    loop
                />
                <p>Nice to see you here! I am a full-stack software developer working on multiple architectures, including e-commerce and API integrations. Feel free to contact me, I'd love to chat!</p>
            </div>
            
        </div>
    )
}

export default Header
