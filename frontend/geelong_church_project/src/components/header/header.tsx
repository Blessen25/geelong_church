import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { faAlignLeft, faCalendarCheck, faChevronDown, faChevronRight, faChurch, faDove, faHome, faInfoCircle, faNewspaper, faPhone, faPrayingHands } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const location = useLocation();
    const [ prayerdropdown, setPrayerDropDown] = useState(false);
    const isActive = (path : any) => location.pathname === path ? "headercontentspara headercontentsparaactive" : "headercontentspara";
    const isActiveSidebar = (path : any) => location.pathname === path ? "headercontentssidebarpara headercontentssidebarparaactive" : "headercontentssidebarpara";
    const isActiveDropdownlink = (path : any) => location.pathname === path ? "headerdropdowncontentsparaactive" : "";
    const [ sidebarActive, setSidebarActive ] = useState(false);
    const [ prayerdropdownsidebar, setPrayerDropDownSidebar] = useState(false);

    const handleSidebarActiveButt = () => {

        setSidebarActive(!sidebarActive);        
    }

    const OnmouseEnter = () => {

        setPrayerDropDown(true);
    }

    const OnmouseLeave = () => {

        setPrayerDropDown(false);
    }

    const OnMouseEnterSidebar = () => {

        setPrayerDropDownSidebar(true);
    }

    const OnMouseLeaveSidebar = () => {

        setPrayerDropDownSidebar(false);
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
                            <a href="/" rel="noopener noreferrer">
                                <img src="../assets/images/Logo/Logo_new.png" alt="Logo" loading="lazy"/>
                            </a>
                        </div>
                        <div className="headercontents">
                            <a href='/' className={`${isActive('/')}`} rel="noopener noreferrer">Home</a>
                            <a href='/about' className={`${isActive('/about')}`} rel="noopener noreferrer">About</a>
                            <div className="prayerdropdowndiv" onMouseEnter={OnmouseEnter} onMouseLeave={OnmouseLeave}>   
                                <a className={`${isActive('/prayerrequest')} || ${isActive('/meetingrequest')}`} rel="noopener noreferrer">Prayer<FontAwesomeIcon icon={faChevronDown} className='dropdownicon'/></a>    
                                {prayerdropdown && (
                                    <>
                                        <div className="prayerdropdown">
                                            <a href='/prayerrequest' className={`prayerdropdownlink ${isActiveDropdownlink('/prayerrequest')}`} rel="noopener noreferrer">Prayer Request</a>
                                            <a href='/meetingrequest' className={`prayerdropdownlink ${isActiveDropdownlink('/meetingrequest')}`} rel="noopener noreferrer">Meetings Registration</a>
                                        </div>
                                    </>
                                )}
                            </div>
                            <a href='/webelieve' className={`${isActive('/webelieve')}`} rel="noopener noreferrer" >We Believe</a>
                            <a href='/ministries' className={`${isActive('/ministries')}`} rel="noopener noreferrer">Ministries</a>
                            <a href='/planyourvisit' className={`${isActive('/planyourvisit')}`} rel="noopener noreferrer">Plan Your Visit</a>
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
                    <div 
                    className="prayersidebardiv" 
                    onMouseEnter={OnMouseEnterSidebar} 
                    onMouseLeave={OnMouseLeaveSidebar}
                    >
                    <a className={`${isActiveSidebar('/prayerrequest')} ${isActiveSidebar('/meetingrequest')}`}>
                        <FontAwesomeIcon icon={faPrayingHands}/>
                        Prayer
                        <FontAwesomeIcon icon={faChevronDown} className='dropdownicon'/>
                    </a>

                    <div className={`sidebarDropdown ${prayerdropdownsidebar ? "open" : ""}`}>
                        <a href='/prayerrequest' className={`${isActiveSidebar('/prayerrequest')} prayerdropdownsidebar`}>
                        <FontAwesomeIcon icon={faPrayingHands}/>Prayer Request
                        </a>

                        <a href='/meetingrequest' className={`${isActiveSidebar('/meetingrequest')} prayerdropdownsidebar`}>
                        <FontAwesomeIcon icon={faCalendarCheck}/>Meeting Registration
                        </a>
                    </div>
                    </div>
                    <a href='/webelieve' className={`${isActiveSidebar('/webelieve')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faDove}/>We Believe</a>
                    <a href='/ministries' className={`${isActiveSidebar('/ministries')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faChurch}/>Ministries</a>
                    <a href='/planyourvisit' className={`${isActiveSidebar('/planyourvisit')}`} rel="noopener noreferrer"><FontAwesomeIcon icon={faNewspaper}/>Plan Your Visit</a>
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