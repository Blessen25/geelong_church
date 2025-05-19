import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation, faLocationDot, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
    const location = useLocation();
    const isActive = (path:any) => location.pathname == path ? "footerdiv2atag footerdiv2atagactive" : "footerdiv2atag";
    return(
        <>  
            <div className="containerfooter">
                <div id='footer'>
                    <div className="footer-top">
                            <div className="footerdiv1">
                                    <div className="footerdiv1img">
                                        <a href="#">
                                        <img src="./assets/images/Logo/Logo_new.png" alt="" />
                                        </a>
                                    </div>
                                    
                                    <div className="footerdiv1text">
                                        <p>Come, Be a Part of the Journey of Faith – Welcome to Geelong Pentecostal Assembly! Discover inspiration, community, and spiritual growth. Join us online or in person, and stay connected with everything happening at our church.</p>
                                    </div>
                            </div>
                            <div className="footerdiv2cstmpages">
                                <h2>Pages</h2>
                                <a href="/" className='footerdiv2atag'><p className={`${isActive('/')}`}>Home</p></a>
                                <a href="/about" className='footerdiv2atag'><p className={`${isActive('/about')}`}>About</p></a>
                                <a href="/ministries" className='footerdiv2atag'><p className={`${isActive('/ministries')}`}>Ministries</p></a>
                                <a href="/newsletters" className='footerdiv2atag'><p className={`${isActive('/newsletters')}`}>Newsletters</p></a>
                                <a href="/webelieve" className='footerdiv2atag'><p className={`${isActive('/webelieve')}`}>We Believe</p></a>
                                <a href="/contact" className='footerdiv2atag'><p className={`${isActive('/contact')}`}>Contact</p></a>

                            </div>
                            <div className="footerdiv2cstmcontact">
                                <h2>Contact</h2>
                                <div className='footerdiv2cstmcontactmix'>
                                    <FontAwesomeIcon icon={faLocationDot} color='#3c79b0' className='footerdiv2cstmcontactmixiconfont'/>
                                    <p>82 Wilsons Road, Newcomb, VIC</p>
                                </div>
                                <div className='footerdiv2cstmcontactmix'>
                                    <FontAwesomeIcon icon={faEnvelope} color='#3c79b0' className='footerdiv2cstmcontactmixiconfont'/>
                                    <p><a href="mailto:geelongpentecostalassembly@gmail.com">geelongpentecostalassembly@gmail.com</a></p>
                                </div> 
                                <div className='footerdiv2cstmcontactmix'>
                                    <FontAwesomeIcon icon={faPhone} color='#3c79b0' className='footerdiv2cstmcontactmixiconfont'/>
                                    <p><a href="tel:+61494357534">+61494357534</a></p>
                                </div> 
                            </div>
                            <div className="footerdiv2cstmsocial">
                                <h2>Social</h2>
                                <ul>
                                        <a href="#" target='_blank'>
                                            <li>
                                                <i className="fab fa-facebook"></i>
                                            </li>
                                        </a>
                                        <a href="#"  target='_blank'>
                                            <li>
                                                <i className="fab fa-instagram"></i>
                                            </li>
                                        </a>
                                        <a href="#" target='_blank'>
                                            <li>
                                                <i className="fab fa-twitter"></i>
                                            </li>
                                        </a>
                                        <a href="#" target='_blank'>
                                            <li>
                                                <i className="fab fa-youtube"></i>
                                            </li>
                                        </a>
                                </ul>
                            </div> 
                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <p>Copyright © 2025. All Rights Reserved.</p>
                    </div>
                </div>          
            </div>
        </>
    )
}


