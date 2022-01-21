import React from 'react';
import { Link } from 'react-scroll';

import './footer.css'

function Footer() {
    return (
        <footer className='mt-auto' style={{ backgroundColor: "black" }}>
            <div className="container m-auto">
                <div className="row align-items-start ">
                    <div className="col-lg-4 col-sm-12 col-md-12">
                        <div className="d-flex flex-column bd-highlight mb-3 " style={{ color: "white" }} >
                            <div className="p-1 bd-highlight">
                                <img src="./logo/whiteLogo.png" alt="logo" style={{ width: "50px" }} />
                                <h2 className='ps-2' style={{ display: "unset", textDecoration: "underline" }}>Care Humanity</h2>
                            </div>
                            <div className="p-1 bd-highlight">
                                <span>
                                    <i className="fas fa-map-marker-alt px-1"></i>
                                    <span>Head Office: </span>
                                    Kotwali Rd, Gurunanakpura, Faisalabad, Punjab, 38000, Pakistan</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-41-9200886</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-41-9200886</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-345-1234567</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-phone-alt px-1"></i>
                                <span>+92-324-8910112</span>
                            </div>

                            <div className="p-1 bd-highlight">
                                <i className="fas fa-envelope"></i>
                                <span> www.careHumanity.com</span>
                            </div>
                            <div className="p-1 bd-highlight">
                                <i className="fas fa-envelope"></i>
                                <span> www.humanityCare.com</span>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-6 col-sm-12 col-md-12  ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.929367191282!2d73.06780311302238!3d31.416072081404177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242bef30a05ed%3A0x39e814b7f874c28d!2sGovernment%20College%20University%20Faisalabad!5e0!3m2!1sen!2s!4v1642493365473!5m2!1sen!2s"
                            width="500" height="340"

                            style={{ border: 0, margin: "0", padding: '0', maxHeight: "800px", maxWidth: "500px", width: "90vw" }}
                            allowfullscreen="" loading="lazy" ></iframe></div>
                    <div className="col-lg-2 col-sm-12 col-md-12" style={{ color: "white" }}>
                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div className="p-1 bd-highlight">
                                <h4 style={{ display: "contents" }}>SITE LINKS</h4>
                            </div>

                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <Link
                                    activeClass="active"
                                    offset={-70}
                                    duration={500}
                                    to='home'
                                    spy={true}
                                    className=" subManue homeMamue" >
                                    <span> Home </span>
                                </Link>
                            </div>
                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <span> About US</span>
                            </div>
                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <span> Contact Us</span>
                            </div>
                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <span> Donate Now</span>
                            </div>
                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <span> Our Resourcess  </span>
                            </div>
                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <span> Our Services</span>
                            </div>
                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <span> Aims & Objectives </span>
                            </div>
                            <div className="p-1 bd-highlight footer-link">
                                <i className="fas fa-greater-than"></i>
                                <span> Our History</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div
                className="col-12 bg-success  "
                style={{
                    color: "white",
                    height: ' 40px',
                    display: ' flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <span>© Copyright 2022 All rights reserved, <b>Care Humanity</b> </span>
            </div>
        </footer>
    )
}

export default Footer

