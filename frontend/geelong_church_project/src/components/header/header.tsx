import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return(
        
        <>
            <nav id="header">
                <div className="headercstmicondiv">
                    <FontAwesomeIcon icon={faBars} className='iconcstm'/>
                </div>
                <div className="headerimg">
                    <a href="#">
                        <img src="../assets/images/Logo/Logoimg-close.jpg" alt="" />
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
            </nav>
        </>
    )
}

export default Header;