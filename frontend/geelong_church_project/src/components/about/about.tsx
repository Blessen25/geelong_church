import React from "react";
import { Containercstm, Flexwithiconandtextdiv, Flexwithiconandtextparentdiv, TitleinMaindiv } from "../extra";
import './about.css'
import { AboutOurMissionArray } from "../../array";

export const AboutComponent = () =>{

    return(

        <>
            <TitleinMaindiv title="About Us" initialtitle= "Home"/>
            <AboutWhoWeAre />
            <AboutOurMission />
            <AboutOurhistory />
        </>
    )
}

export const AboutWhoWeAre = () => {

    return(
        
        <>
            <div className="aboutfirstdiv">
                <img src="assets/images/main/bibleone.jpg" alt="Image" />
                <div className="aboutfirsttextdiv">
                        <h1 className="text_cstm_big_heading">Who We Are?</h1>
                        <div>
                           <p className="text_cstm_normal_para">At Geelong Pentecostal Assembly, we are more than just a church — we are a vibrant, Christ-centered family rooted in love, unity, and spiritual growth. As a dynamic and multicultural Pentecostal community, we are passionate about sharing the life-transforming love of Jesus Christ with everyone we meet.</p>
                           <p className="text_cstm_normal_para">Located in the heart of Geelong, our congregation beautifully reflects the rich cultural diversity of our city. People from all walks of life, nationalities, and backgrounds come together as one body to worship, grow, and serve in faith. Whether you’re new to the Christian faith, seeking a deeper relationship with God, or simply looking for a spiritual home, you are warmly invited to be part of our community.</p>
                           <p className="text_cstm_normal_para">We believe in powerful worship, passionate prayer, and practical teaching rooted in the Word of God. Our Sunday services are filled with vibrant praise, spirit-led messages, and a strong sense of fellowship that makes everyone feel welcome and valued.</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export const AboutOurMission = () => {

    return(
        
        <>
            <Containercstm>
                <div className="aboutseconddiv">
                    <h1 className="text_cstm_big_heading">Our Mission</h1>
                    <Flexwithiconandtextparentdiv items={AboutOurMissionArray}/>
                </div>
            </Containercstm>
            
        </>
    )
}

export const AboutOurhistory = () => {

    return(

        <>
        
        </>
    )
}