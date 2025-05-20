import React from "react";
import { ButtonwithtextComponentColor, Containercstm, Containerdiv, ContainerWidthCstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, Flexwithiconandtextparentdiv, TitleinMaindiv } from "../extra";
import './about.css'
import { AboutOurMissionArray } from "../../array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

export const AboutComponent = () =>{

    return(
        <>
            <TitleinMaindiv title="About Us" initialtitle= "Home"/>
            <Containercstm>
                <ContainerWidthCstm >
                    <AboutWhoWeAre />
                    <AboutusStartyoursundays/>
                    <AboutOurMission />
                    <AboutOurhistoryandOurBeliefs />
                    <AboutOurleadershipandWhattoExpect />
                    <AboutCommunityimpactandMulticulture />
                    <AboutOurMinistriesdiv />
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}

export const AboutWhoWeAre = () => {

    return(
        
        <>
            <div className="aboutfirstdiv">
                <div className="aboutfirsttextdiv">
                        <h1 className="text_cstm_big_heading">Who We Are?</h1>
                        <div>
                           <p className="text_cstm_normal_para">At Geelong Pentecostal Assembly, we are more than just a church we are a vibrant, Christ-centered family rooted in love, unity, and spiritual growth. As a dynamic and multicultural Pentecostal community, we are passionate about sharing the life-transforming love of Jesus Christ with everyone we meet. Located in the heart of Geelong, our congregation beautifully reflects the rich cultural diversity of our city. People from all walks of life, nationalities, and backgrounds come together as one body to worship, grow, and serve in faith. Whether you’re new to the Christian faith, seeking a deeper relationship with God, or simply looking for a spiritual home, you are warmly invited to be part of our community. We believe in powerful worship, passionate prayer, and practical teaching rooted in the Word of God. Our Sunday services are filled with vibrant praise, spirit-led messages, and a strong sense of fellowship that makes everyone feel welcome and valued.</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export const AboutOurMission = () => {

    return(
        
        <>
            
                <Flexwithgapcstmdivcol>
                    <h1 className="text_cstm_big_heading">Our Mission</h1>
                    <p className="text_cstm_normal_para textalign_cstmjustify">At Geelong Pentecostal Assembly, we are passionate about fulfilling the mission Jesus gave us to love God, love people, and make disciples. Our mission is lived out in four core areas:</p>
                    <Flexwithiconandtextparentdiv items={AboutOurMissionArray}/>
                </Flexwithgapcstmdivcol>
            
            
        </>
    )
}

export const AboutOurhistoryandOurBeliefs = () => {

    return(

        <>
                <Flexwithgapcstmdivrow parentClassname="csmtflexwrapstyle">
                    <Flexwithgapcstmdivcol>
                        <h1 className="text_cstm_big_heading">Our History</h1>
                        <p className="text_cstm_normal_para textalign_cstmjustify">Geelong Pentecostal Assembly was birthed from a small prayer gathering in the heart of Geelong, where a few passionate believers came together seeking a deeper connection with God. Over the years, what started as a humble fellowship has grown into a dynamic, multicultural congregation representing people from various walks of life. With God's grace, we’ve established a strong presence in the community—offering hope, healing, and purpose to individuals and families. Our story is one of faith, perseverance, and a firm belief in God's calling to serve and uplift our city.</p>
                    </Flexwithgapcstmdivcol>
                    <Flexwithgapcstmdivcol parentClassname="flexprimarycolorcstmbackground">
                        <h1 className="text_cstm_big_heading">Our Beliefs</h1>
                        <p className="text_cstm_normal_para textalign_cstmjustify">We are rooted in Pentecostal doctrine and are passionate about living according to the principles of the Bible. We believe in one God, existing in three persons—Father, Son, and Holy Spirit. Jesus Christ is our Savior and Redeemer, and through His death and resurrection, we receive the gift of eternal life. We believe in the power of the Holy Spirit to transform lives, guide us, and empower us with spiritual gifts. The Bible is our ultimate authority, and we strive to live according to its teachings in every area of our lives.</p>
                    </Flexwithgapcstmdivcol>
                </Flexwithgapcstmdivrow>
        </>
    )
}

export const AboutOurleadershipandWhattoExpect = () => {

    return(

        <>
                <Flexwithgapcstmdivrow parentClassname="csmtflexwrapstyle">
                    <Flexwithgapcstmdivcol>
                        <h1 className="text_cstm_big_heading">Leadership Team</h1>
                        <p className="text_cstm_normal_para textalign_cstmjustify">Our pastoral and leadership team is comprised of dedicated men and women who have committed their lives to the service of the Church and its members. With a heart for ministry and a passion for people, they provide spiritual care, mentorship, and oversight for various programs. They are approachable, prayerful, and always ready to lend support—whether it’s through teaching, counseling, or simply sharing life together in fellowship.</p>
                    </Flexwithgapcstmdivcol>
                    <Flexwithgapcstmdivcol parentClassname="flexprimarycolorcstmbackground">
                        <h1 className="text_cstm_big_heading">What to Expect</h1>
                        <p className="text_cstm_normal_para textalign_cstmjustify">From the moment you step into our church, you will be welcomed by a friendly community that values connection and belonging. Our Sunday worship service begins with heartfelt praise and worship, followed by a message grounded in biblical truth. Whether you're new to church, exploring faith, or looking for a spiritual home, you’ll find a safe and encouraging environment. We also offer children’s programs, translation services, and refreshments after service to foster fellowship and conversation.</p>
                    </Flexwithgapcstmdivcol>
                </Flexwithgapcstmdivrow>
        </>
    )
}

export const AboutCommunityimpactandMulticulture = () => {

    return(

        <>
                <Flexwithgapcstmdivrow parentClassname="csmtflexwrapstyle">
                    <Flexwithgapcstmdivcol>
                        <h1 className="text_cstm_big_heading">Our Community Impact</h1>
                        <p className="text_cstm_normal_para textalign_cstmjustify">At Geelong Pentecostal Assembly, our mission extends far beyond our church walls. We are committed to making a tangible difference in the lives of those around us. From organizing food distribution programs and providing essential aid to struggling families, to visiting the elderly, hosting youth empowerment events, and partnering with local charities, we are actively engaged in bringing hope to our city. We believe that faith must be lived out through service, and every member is encouraged to be part of this mission.</p>
                    </Flexwithgapcstmdivcol>
                    <Flexwithgapcstmdivcol parentClassname="flexprimarycolorcstmbackground">
                        <h1 className="text_cstm_big_heading">Multicultural Diversity</h1>
                        <p className="text_cstm_normal_para textalign_cstmjustify">We celebrate the beautiful tapestry of cultures that make up our congregation. With members from diverse backgrounds—Africa, Asia, the Pacific Islands, Europe, and beyond—we reflect the global body of Christ. Our services incorporate multilingual worship, cultural events, and shared meals that highlight our unity in diversity. We believe every person has a place at God’s table, and we are committed to creating a space where everyone feels included, respected, and loved.</p>
                    </Flexwithgapcstmdivcol>
                </Flexwithgapcstmdivrow>
        </>
    )
}

export const AboutOurMinistriesdiv = () => {

    return(

        <>
                <Flexwithgapcstmdivcol>
                    <h1 className="text_cstm_big_heading">Our Ministries</h1>
                    <p className="text_cstm_normal_para textalign_cstmjustify">At Geelong Pentecostal Assembly, ministry is at the heart of everything we do. Our diverse range of ministries is designed to serve every age group and walk of life—helping individuals grow in faith, build meaningful relationships, and make a difference in our community. Whether you’re passionate about worship, outreach, youth mentorship, or caring for the vulnerable, there’s a place for you to get involved and thrive in your calling.</p>
                    <Flexwithgapcstmdivrow parentClassname="flexjustifycontent_spacebetween cstmaboutourministriesimagediv">
                        <img src="assets/images/main/outreachMinsitriesone.jpg" alt="ministries" className="imagedivrowcstmabout"/>
                        <img src="assets/images/main/womenMinistries.jpg" alt="ministries" className="imagedivrowcstmabout"/>
                        <img src="assets/images/main/teenMinistries.jpg" alt="ministries" className="imagedivrowcstmabout"/>
                        <img src="assets/images/main/Intercessoryprayer.jpg" alt="ministries" className="imagedivrowcstmabout"/>
                    </Flexwithgapcstmdivrow>
                    <div className="aboutminsitriesbtncstm">
                        <ButtonwithtextComponentColor label={"Explore Our Minsitries"} fullwidth={false} classname="exploreministriesbtncstm"/>
                    </div>
                </Flexwithgapcstmdivcol>
        </>
    )
}


export const AboutusStartyoursundays = () => {

    return(
        <>
            <div className="Aboutusstartyoursundaysparentdiv">
                <div className="aboutusstartchildone">
                    <h1 className="text_cstm_big_heading">Sunday Starts Here</h1>
                    <p className="text_cstm_normal_para textalign_cstmjustify">Discover a vibrant worship experience that lifts your spirit and deepens your faith every Sunday at 10:00 am.</p>
                    <p className="text_cstm_normal_para textalign_cstmjustify">At Geelong Pentecostal Assembly, our Sunday services begin at 10:00 am, right in the heart of Geelong. Whether you're seeking peace, community, or spiritual growth, one visit can change your week, and your life. Come early, meet new friends, and enjoy an atmosphere filled with worship, prayer, and the living Word of God.</p>
                    <div className="checklistdivaboutus">
                        <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                            <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                            <p className="text_cstm_normal_para">Spirit-led messages</p>
                        </Flexwithgapcstmdivrow>
                        <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                            <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                            <p className="text_cstm_normal_para">Uplifting praise and worship</p>
                        </Flexwithgapcstmdivrow>
                        <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                            <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                            <p className="text_cstm_normal_para">A welcoming, multicultural family</p>
                        </Flexwithgapcstmdivrow>
                        <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                            <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                            <p className="text_cstm_normal_para">Kids & youth programs available</p>
                        </Flexwithgapcstmdivrow>
                    </div>
                </div>
                <div className="aboutusstartchildtwo">
                    <div className="imageoneaboutusstarttwo">
                        <img src="assets/images/main/reading_bible.jpg" alt="imageone" />
                    </div>
                    <div className="imagetwoaboutusstarttwo">
                        <img src="assets/images/main/prayerone.jpg" alt="imageone" />
                    </div>
                </div>
            </div>
        </>
    )
}