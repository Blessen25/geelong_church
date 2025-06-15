import React, { useEffect, useState } from "react";
import './homecomponent.css';
import { ButtonwithtextComponent, ButtonwithtextComponentColor, Containercstm, Containerdiv, ContainerWidthCstm, Flexwithgapcstmdivcol, Paddingtopdivhome, Popupdiv } from "../extra";
import { HomeFourDivChildCompProps, HomeFourDivsProps } from "../../interface";
import { Events, HomeFourDivChildArray } from "../../array";
import axios from "axios";

export const HomeComponent = () => {

    const [showPopup, setShowPopup] = useState(false);
    const HandleOpenPopup = () => setShowPopup(true);
    const HandleClosePopup = () => setShowPopup(false);

    const API_URL = process.env.REACT_APP_API_URL

    const getEvents = async () => {

        try {
            const response = await axios.get(`${API_URL}event/`)
            return response.data;
        } catch (error) {

            console.error('Error fetching events:', error);
            throw error;
        }
    };

    useEffect(()=>{

        console.log(getEvents());
    },[])

    return (
        <>
        <Paddingtopdivhome>
        <HomeIntroBanner />
            <Containercstm>
                <>
                    <ContainerWidthCstm>
                        <HomeflexContents />
                        <HomeQuote />
                        <Homefourdivs onClickForUpcomingEvents={HandleOpenPopup}/>
                        <HomeJoinusonComp />
                    </ContainerWidthCstm>
                </>
            </Containercstm>
            {showPopup && (
                        <>
                            <div className="outlaypopupcstm">
                                <Popupdiv onClickprop={HandleClosePopup} title="Upcoming Events" children={
                                    <>
                                        <div className="upcomingeventpopup">
                                            {Events.map((items, index) =>(
                                              <div key={index} className="upcomingeventpopupchild boxshadowcstm" style={{ backgroundImage : 'url("assets/images/main/dove.jpg")'}}>
                                                <Flexwithgapcstmdivcol parentClassname="eventsdivcstm">
                                                    <p className="text_cstm_normal_para upcomingeventparacstm">{items.eventName}</p>
                                                    <p className="text_cstm_normal_para upcomingeventparacstm">{items.date}</p>
                                                </Flexwithgapcstmdivcol>
                                            </div>  
                                            )
                                            )}
                                        </div>
                                    </>
                                }/>                               
                            </div>
                        </>
            )}
        </Paddingtopdivhome>
        </>
        
    )
}

export const HomeIntroBanner = () => {

    return (

        <>
        <div className="imagecstmdivhome" style={{ backgroundImage : 'url("assets/images/main/bibleone.jpg")'}}> 
            <div className="textdivcstmhome">
                <h1>Welcome to</h1>
                <h1>Geelong Pentecostal Assembly</h1>
                <p>A Community Rooted in Love, Faith & Hope</p>
                <p>Join us in Worship, Fellowship, and Spiritual Growth</p>
                <blockquote>
                    "For where two or three gather in my name, there am I with them."
                    <cite>Matthew 18:20</cite>
                </blockquote>
                <div className="homebackgroundbuttondiv">
                    <ButtonwithtextComponent label="Connect With Us" route="/contact" fullwidth={false}/>
                </div>
            </div>
        </div>
        </>
    )
}

export const HomeQuote = () => {

    return(
        <>
            <div className="homequotediv">
                <h1 className="text_cstm_big_heading">God’s Promise to You</h1>
                <div className="homequoteblockquoteflex">
                <blockquote>
                    <p className="text_cstm_normal_para textalign_cstmjustify">"Arise, shine; for thy light is come, and the glory of the Lord is risen upon thee.”</p>
                    <cite className="text_cstm_normal_para">Isaiah 60:1</cite>
                </blockquote>   
                <blockquote>
                    <p className="text_cstm_normal_para textalign_cstmjustify">"But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.”</p>
                    <cite className="text_cstm_normal_para"> Matthew 6:33</cite>
                </blockquote>   
                <blockquote>
                    <p className="text_cstm_normal_para textalign_cstmjustify">"Delight thyself also in the Lord; and he shall give thee the desires of thine heart.”</p>
                    <cite className="text_cstm_normal_para">Psalm 37:4</cite>
                </blockquote>   
                </div>
            </div>
        </>
    )
}

export const HomeflexContents = () => {

    return(

        <>
        <div className="parentflexcstm">
                <div className="childflexcstm">
                        <h1 className="text_cstm_big_heading">A Place to Call Home</h1>
                        <p className="textalign_cstmjustify text_cstm_normal_para">At Geelong Pentecostal Assembly, we believe that everyone deserves a second chance, a new beginning, and a place to truly belong. No matter your past, your background, or where you are in your spiritual journey you are welcome here. </p>
                        <p className="textalign_cstmjustify text_cstm_normal_para">We are more than just a church. We are a spirit-filled family rooted in love, faith, and hope. Our congregation is a beautiful reflection of the diversity of Geelong people of all ages, cultures, and walks of life, united by the transforming power of Jesus Christ.</p>
                        <p className="textalign_cstmjustify text_cstm_normal_para">Each week, we come together to worship, pray, and grow not as strangers, but as one community in Christ. Whether it's a powerful Sunday service, a quiet moment of reflection, or a shared meal during fellowship, we believe in walking side by side through life’s joys and struggles.</p>
                        <p className="textalign_cstmjustify text_cstm_normal_para">If you're feeling lost, tired, or searching for purpose, know this God has not forgotten you, and neither have we. Our doors and our hearts are wide open. Here, you’ll find a place to heal, to connect, and to rediscover the joy of living a life led by faith.</p>
                        <p className="textalign_cstmjustify text_cstm_normal_para"> So whether you're just beginning to explore Christianity, returning after time away, or looking for a new church to call home, Geelong Pentecostal Assembly is here for you.</p>
                        <p className="textalign_cstmjustify text_cstm_normal_para">Welcome home. We’ve been waiting for you.</p>
                </div>
                <div className="childflexcstm" style={{ backgroundImage: "url('../assets/images/main/praying.jpg"}}>
                </div>
        </div>  
        </>
    )
}

export const Homefourdivs:React.FC<HomeFourDivsProps> = (Props) => {
    
    return(
        
        <>

            <div className="homefourdivcstm">
                {HomeFourDivChildArray.map((items, index) =>(
                            <HomeFourDivChildComp route={items.route} text={items.text} image={items.image} onClick={items.text === "Upcoming Events" ? Props.onClickForUpcomingEvents : undefined} key={index}/>
                ))}
            </div>
        </>
    )
}

export const HomeFourDivChildComp:React.FC<HomeFourDivChildCompProps> = (Props) => {

    return(

        <>
        {Props.route ? (<>
            <a href={Props.route}>
                <div className="homefourdivchildcstm">
                    <p>{Props.text}</p>
                    <img src={Props.image} alt="Alt_Image"/>
                </div>
            </a>
        </>) : (<>
                <div className="homefourdivchildcstm" onClick={Props.onClick} style={{ cursor: "pointer" }}>
                    <p>{Props.text}</p>
                    <img src={Props.image} alt="Alt_Image"/>
                </div>
        </>)}
        </>
    )
}

export const HomeJoinusonComp = () => {

    return(

        <>
            <div className="joinusondivcstm" style={{ backgroundImage: "url('../assets/images/main/reading_bible.jpg')"}}>
                <div className="joinusondivtext">
                    <h1>Join Us On!</h1>
                    <p>Every Sunday at 10:00 AM</p>
                    <div className="joinusondivbutton">
                    <ButtonwithtextComponent label="Youtube" route="" fullwidth={false}/>
                    <ButtonwithtextComponentColor label="Facebook" route="" fullwidth={false}/>
                    </div>
                </div>
            </div>
        </>
    )
}