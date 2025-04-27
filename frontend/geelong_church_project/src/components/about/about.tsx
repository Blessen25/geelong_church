import React from "react";
import { TitleinMaindiv } from "../extra";
import './about.css'

export const AboutComponent = () =>{

    return(

        <>
            <TitleinMaindiv title="About Us" initialtitle= "Home"/>
            <Aboutfirstdiv />
        </>
    )
}

export const Aboutfirstdiv = () => {

    return(
        
        <>
            <div className="aboutfirstdiv">
                <img src="assets/images/main/bibleone.jpg" alt="" />
                <div className="aboutfirsttextdiv">

                </div>
            </div>
        </>
    )
}