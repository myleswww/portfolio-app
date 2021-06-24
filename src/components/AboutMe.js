import React from "react";
import author from "../mecrop.jpg";

const AboutMe = () => {
    return (
        <div className = "container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profileimg" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
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
        </div>
    )
}

export default AboutMe
