import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot, faMap } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {

    return(
        <>  
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
                            <a href="#" className='footerdiv2atag'><p>Home</p></a>
                            <a href="#" className='footerdiv2atag'><p>About</p></a>
                            <a href="#" className='footerdiv2atag'><p>Ministries</p></a>
                            <a href="#" className='footerdiv2atag'><p>Newsletters</p></a>
                            <a href="#" className='footerdiv2atag'><p>Church Online</p></a>
                            <a href="#" className='footerdiv2atag'><p>Contact</p></a>

                        </div>
                        <div className="footerdiv2cstmcontact">
                            <h2>Contact</h2>
                            <div className='footerdiv2cstmcontactmix'>
                                <FontAwesomeIcon icon={faLocationDot} color='#3c79b0'/>
                                <p>82 Wilsons Road, Newcomb, VIC</p>
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
        </>
    )
}


