import React from "react";
import { Containercstm, Flexwithgapcstmdiv, Flexwithiconandtextdiv, Flexwithiconandtextparentdiv, TitleinMaindiv } from "../extra";
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
                <Flexwithgapcstmdiv>
                    <h1 className="text_cstm_big_heading">Our Mission</h1>
                    <p className="text_cstm_normal_para textalign_cstmjustify">At Geelong Pentecostal Assembly, we are passionate about fulfilling the mission Jesus gave us — to love God, love people, and make disciples. Our mission is lived out in four core areas:</p>
                    <Flexwithiconandtextparentdiv items={AboutOurMissionArray}/>
                </Flexwithgapcstmdiv>
            </Containercstm>
            
        </>
    )
}

export const AboutOurhistory = () => {

    return(

        <>
            <Containercstm>
                <Flexwithgapcstmdiv>
                    <h1 className="text_cstm_big_heading">Our History</h1>
                    <p className="text_cstm_normal_para textalign_cstmjustify">Geelong Pentecostal Assembly was birthed from a small prayer gathering in the heart of Geelong, where a few passionate believers came together seeking a deeper connection with God. Over the years, what started as a humble fellowship has grown into a dynamic, multicultural congregation representing people from various walks of life. With God's grace, we’ve established a strong presence in the community—offering hope, healing, and purpose to individuals and families. Our story is one of faith, perseverance, and a firm belief in God's calling to serve and uplift our city.</p>
                </Flexwithgapcstmdiv>
            </Containercstm>
        </>
    )
}