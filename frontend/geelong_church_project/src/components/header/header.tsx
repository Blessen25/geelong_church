import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faAlignLeft, faBars, faChurch, faHome, faInfoCircle, faNewspaper, faPhone, faTv } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const location = useLocation();
    const isActive = (path : any) => location.pathname === path ? "headercontentspara headercontentsparaactive" : "headercontentspara";
    const isActiveSidebar = (path : any) => location.pathname === path ? "headercontentssidebarpara headercontentssidebarparaactive" : "headercontentssidebarpara";
    const [ sidebarActive, setSidebarActive ] = useState(false);
    const handleSidebarActiveButt = () => {

        setSidebarActive(!sidebarActive);        
    }

    return(
        
        <>
            <nav>
                <div id="header">
                <div className="headercstmicondiv">
                    <FontAwesomeIcon icon={faAlignLeft} className={`${sidebarActive ? 'iconcstm-one-colorlightblue' : 'iconcstm-one'}`} onClick={handleSidebarActiveButt}/>
                </div>
                <div className="headerimg">
                    <a href="#">
                        <img src="../assets/images/Logo/Logo_new.png" alt="" />
                    </a>
                </div>
                <div className="headercontents">
                    <a href='/' className={`${isActive('/')}`}>Home</a>
                    <a href='/about' className={`${isActive('/about')}`}>About</a>
                    <a href='/ministries' className={`${isActive('/ministries')}`}>Ministries</a>
                    <a href='/newletters' className={`${isActive('/newletters')}`}>Newsletters</a>
                    <a href='/churchonline' className={`${isActive('/churchonline')}`}>Church Online</a>
                    <a href='/contact' className={`${isActive('/contact')}`}>Contact</a>    
                </div>
                </div>
                {sidebarActive ? (
                    <>
                    <div className="outlaysidebar">
                    </div>
                    <div className="sidebardiv">
                    <a href='/' className={`${isActiveSidebar('/')}`}><FontAwesomeIcon icon={faHome}/>Home</a>
                    <a href='/about' className={`${isActiveSidebar('/about')}`}><FontAwesomeIcon icon={faInfoCircle}/>About</a>
                    <a href='/ministries' className={`${isActiveSidebar('/ministries')}`}><FontAwesomeIcon icon={faChurch}/>Ministries</a>
                    <a href='/newletters' className={`${isActiveSidebar('/newletters')}`}><FontAwesomeIcon icon={faNewspaper}/>Newsletters</a>
                    <a href='/churchonline' className={`${isActiveSidebar('/churchonline')}`}><FontAwesomeIcon icon={faTv}/>Church Online</a>
                    <a href='/contact' className={`${isActiveSidebar('/contact')}`}><FontAwesomeIcon icon={faPhone}/>Contact</a> 
                    </div>  
                    </>
                ) : (
                    <>
                    
                    </>
                )}
            </nav>
        </>
    )
}

export default Header;