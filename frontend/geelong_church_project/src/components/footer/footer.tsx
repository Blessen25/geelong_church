import React from 'react';
import './footer.css';

export const Footer = () => {

    return(
        <>  
            <div id='footer'>
               <div className="footerdiv1">
                    <div className="footerdiv1img">
                        <a href="#">
                          <img src="./assets/images/Logo/Logo_new.png" alt="" />
                        </a>
                    </div>
                    
                    <div className="footerdiv1text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate a placeat debitis. Voluptatum maiores incidunt esse quod, molestiae asperiores eaque numquam nostrum. Deserunt, itaque. Ipsum ad officiis quaerat rerum.</p>
                    </div>
               </div>
               <div className="footerdiv2">
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
                        
                    </div>
                    <div className="footerdiv2cstmsocial">
                        
                    </div>
               </div>
            </div>
        </>
    )
}


