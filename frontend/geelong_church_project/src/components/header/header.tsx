import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import React, { useState } from 'react';
import { faAlignLeft, faBars, faChurch, faHome, faInfoCircle, faNewspaper, faPhone, faTv } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

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
                    <a href='#' className='headercontentspara'>Home</a>
                    <a href='#' className='headercontentspara'>About</a>
                    <a href='#' className='headercontentspara'>Ministries</a>
                    <a href='#' className='headercontentspara'>Newsletters</a>
                    <a href='#' className='headercontentspara'>Church Online</a>
                    <a href='#' className='headercontentspara'>Contact</a>    
                </div>
                </div>
                {sidebarActive ? (
                    <>
                    <div className="outlaysidebar">
                    </div>
                    <div className="sidebardiv">
                    <a href='#' className='headercontentssidebarpara'><FontAwesomeIcon icon={faHome}/>Home</a>
                    <a href='#' className='headercontentssidebarpara'><FontAwesomeIcon icon={faInfoCircle}/>About</a>
                    <a href='#' className='headercontentssidebarpara'><FontAwesomeIcon icon={faChurch}/>Ministries</a>
                    <a href='#' className='headercontentssidebarpara'><FontAwesomeIcon icon={faNewspaper}/>Newsletters</a>
                    <a href='#' className='headercontentssidebarpara'><FontAwesomeIcon icon={faTv}/>Church Online</a>
                    <a href='#' className='headercontentssidebarpara'><FontAwesomeIcon icon={faPhone}/>Contact</a> 
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