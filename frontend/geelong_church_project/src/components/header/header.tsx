import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faAlignLeft, faBars, faChurch, faDove, faHome, faInfoCircle, faNewspaper, faPhone, faTv } from '@fortawesome/free-solid-svg-icons';

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
                <div className="containerheadercstm">
                    <div id="header">
                        <div className="headercstmicondiv">
                            <FontAwesomeIcon icon={faAlignLeft} className={`${sidebarActive ? 'iconcstm-one-colorlightblue' : 'iconcstm-one'}`} onClick={handleSidebarActiveButt}/>
                        </div>
                        <div className="headerimg">
                            <a href="#" rel="noopener noreferrer">
                                <img src="../assets/images/Logo/Logo_new.png" alt="" />
                            </a>
                        </div>
                        <div className="headercontents">
                            <a href='/' className={`${isActive('/')}`} rel="noopener noreferrer">Home</a>
                            <a href='/about' className={`${isActive('/about')}`} rel="noopener noreferrer">About</a>
                            <a href='/ministries' className={`${isActive('/ministries')}`} rel="noopener noreferrer">Ministries</a>
                            <a href='/planyourvisit' className={`${isActive('/planyourvisit')}`} rel="noopener noreferrer">Plan Your Visit</a>
                            <a href='/webelieve' className={`${isActive('/webelieve')}`} rel="noopener noreferrer" >We Believe</a>
                            <a href='/contact' className={`${isActive('/contact')}`} rel="noopener noreferrer">Contact</a>    
                        </div>
                    </div>
                </div>
                {sidebarActive ? (
                    <>
                    <div className="outlaysidebar">
                    </div>
                    <div className="sidebardiv">
                    <a href='/' className={`${isActiveSidebar('/')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faHome}/>Home</a>
                    <a href='/about' className={`${isActiveSidebar('/about')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faInfoCircle}/>About</a>
                    <a href='/ministries' className={`${isActiveSidebar('/ministries')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faChurch}/>Ministries</a>
                    <a href='/planyourvisit' className={`${isActiveSidebar('/planyourvisit')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faNewspaper}/>Plan Your Visit</a>
                    <a href='/webelieve' className={`${isActiveSidebar('/webelieve')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faDove}/>We Believe</a>
                    <a href='/contact' className={`${isActiveSidebar('/contact')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone}/>Contact</a> 
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