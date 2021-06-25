import React from "react";
import author from "../mecrop.jpg";
import cat from "../IMG-8270.jpg";
import sun from "../sun.png";

const AboutMe = () => {
    return (
        <div id="about" className = "container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profileimg" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="about-me col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                    <p>
                        Hello, my name is Myles! I am a full stack developer and a computer science graduate passionate about UI design and data engineering. 
                        
                        For a bit on my personal life,
                        I am obsessed with 80's style music and design, and I love to spend my free time playing VR or Magic the Gathering. 
                        I am from Indiana, I have a cat named Simon (see him below), and two snakes, Perry and Major.
                        
                        I enjoy reading any book that I can get my grubby little hands on, and some say I would even be considered a book horder!
                        
                    </p>
                </div>
            </div>
            <div className="row">
            <div className="design col-lg-6 col-xm-12">
                    <img className="sun-img" src={sun} alt="sun..." />
                </div>
            <div className="about-me col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profileimg" src={cat} alt="author..."/>
                        <p>This is Simon. He is the worst doodoohead troublemaking smelly boy that I have ever met. He also sits for his food. And does parkour.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
