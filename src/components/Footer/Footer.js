import React from 'react';
import "./Footer.css";

import showcaseBlob from "../../assets/images/Illustration.png";
import showcaseBlob2 from "../../assets/images/Illustration-2.png";

import { AiFillFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='mt-10'>
            <div className="footer-top image-bg-footer flex">
                <div className="container flex">
                    <div>
                        <AiFillFacebook size={44} />
                        <AiOutlineInstagram size={44} />   
                        <AiOutlineLinkedin size={44} />
                        <div>
                            <h3>Address</h3>
                            <p>Gwarimpa Abuja</p>
                        </div>
                    </div>

                    <div>
                        <h3>Services</h3>
                        <p>Video Editing</p>
                        <p>CGI</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                    </div>

                    <div>
                        <h3>Services</h3>
                        <p>Video Editing</p>
                        <p>CGI</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <p>Video Editing</p>
                        <p>CGI</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                    </div>

                    <div>
                        <h3>About us</h3>
                        <p>Video Editing</p>
                        <p>CGI</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                        <p>Video Editing</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="footer-bottom">
                    <div className="container flex flex-col-sm-reverse">
                        <div>
                            <p>Copyright &copy; 2022, All rights Reserved</p>
                        </div>

                        <div className='flex'>
                            <p style={{ marginRight: "20px" }}>Cookie Policy</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer