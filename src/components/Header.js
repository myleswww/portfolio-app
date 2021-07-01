import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div id="home" className ="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm Myles!</h1>
                <Typed
                    className="typed-text"
                    strings={["React", "Visualforce", "Apex", "Swift", "RESTful APIs", "Agile Development", "Database Development", "IOS Development"]}
                    typeSpeed={40}
                    backSpeed={80}
                    loop
                />
                <p>Nice to see you here! I am a software developer who works on multiple architectures and study areas, including HCI research and development. Feel free to contact me, I'd love to chat!</p>
            </div>
            
        </div>
    )
}

export default Header
