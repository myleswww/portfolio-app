import React from "react";
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className ="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p> Indianapolis, IN</p>
                        </div>
                        <div className="d-flex">
                            <p>myleswright0518@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a><br></br>
                                <a className="footer-nav">About Me</a><br></br>
                                <a className="footer-nav">Experience</a>
                                
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a><br></br>
                                <a className="footer-nav">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/myleswww"}
                                quote={"Myles Wright's Developer Portfolio"}
                                hashtag="#react.js"
                            >
                                <FacebookIcon className="mx-3" size={36}></FacebookIcon></FacebookShareButton>


                            <TwitterShareButton
                                url={"https://github.com/myleswww"}
                                quote={"Myles Wright's Developer Portfolio"}
                                hashtag="#react.js"
                            >
                                <TwitterIcon className="mx-3" size={36}></TwitterIcon></TwitterShareButton>


                            <RedditShareButton
                                url={"https://github.com/myleswww"}
                                quote={"Myles Wright's Developer Portfolio"}
                                hashtag="#react.js"
                            >
                                <RedditIcon className="mx-3" size={36}></RedditIcon></RedditShareButton>
                            <LinkedinShareButton
                                url={"https://github.com/myleswww"}
                                quote={"Myles Wright's Developer Portfolio"}
                                hashtag="#react.js"
                            >
                                <LinkedinIcon className="mx-3" size={36}></LinkedinIcon></LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Myles Wright | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
