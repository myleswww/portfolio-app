import React from "react";
import author from "../mecrop.jpg";
import cat from "../IMG-8270.jpg";
import sun from "../sun.png";
import chicken_1 from "../IMG_0068.JPG";
import chicken_2 from "../IMG_0070.JPG";
import chicken_3 from "../IMG_9288.JPG";
import chicken_4 from "../IMG_1716.jpg";
import chicken_5 from "../IMG_1443.jpg";

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
                        Hello, my name is Myles! I am a full stack developer passionate about data science.<br></br>
                        
                        For a bit on my personal life,
                        I have 32 chickens that I love to take care of, as well as a cat named Simon.
                        
                       I am also a huge fan of fitness and health, spending a lot of time in the gym and cooking healthy meals.
                       There is nothing more important than your health!
                        
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="about-me col-lg-6 col-xm-12">
                </div>
                <div className="about-me col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profileimg" src={cat} alt="author..." />
                        <p>This is Simon. He is a troublemaker.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="about-me col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <p>These are the chickens, as you can see they are very lively.</p>
                        <img className="profileimg" src={chicken_1} alt="chicken..." />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="about-me col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    </div>
                </div>
                <div className="about-me col-lg-6 col-xm-12">
                <div className="photo-wrap mb-5">
                    <p>They stay just as cute when they grow up</p>
                </div>
                
                    <div className="photo-wrap mb-5">
                        <img className="profileimg" src={chicken_2} alt="chicken..." />
                        <img className="profileimg" src={chicken_3} alt="chicken..." />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="about-me col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <p>One of our very first roosters</p>
                    </div>
                    
                    <div className="photo-wrap mb-5">
                        <img className="profileimg" src={chicken_4} alt="chicken..." />
                        <img className="profileimg" src={chicken_5} alt="chicken..." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
