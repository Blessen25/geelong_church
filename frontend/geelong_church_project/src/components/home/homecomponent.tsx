import React from "react";
import './homecomponent.css';
import { ButtonwithtextComponent, ButtonwithtextComponentColor, Containerdiv } from "../extra";
import { HomeFourDivChildCompProps } from "../../interface";
import { HomeFourDivChildArray } from "../../array";

export const HomeComponent = () => {

    return (
        <>
            <Containerdiv children={
                <>
                    <div className="mainhome">
                        <HomeIntroBanner />
                        <HomeflexContents />
                        <HomeQuote />
                        <Homefourdivs />
                        <HomeJoinusonComp />
                    </div>
                </>
            }/>
        </>
    )
}

export const HomeIntroBanner = () => {

    return (

        <>
        <div className="designcstmbackgroundone"></div>
        <div className="designcstmbackground2"></div>
        <div className="designcstmbackground3"></div>
        <div className="designcstmbackground4"></div>
        <div className="imagecstmdivhome">
            <img src="../assets/images/main/handraising.jpg" alt="Workship" className="imageonecstm"/>
            <div className="textdivcstmhome">
                <h1>Welcome To <br /> Geelong Pentecostal Assembly <br /></h1>
                <p> Embracing Diversity, Celebrating Faith</p>
                <ButtonwithtextComponentColor label={"Connect With Us"} fullwidth={false} route="#" classname="connectwithuscstm"/>
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
                    <p className="text_cstm_normal_para">"Arise, shine; for thy light is come, and the glory of the Lord is risen upon thee.”</p>
                    <cite className="text_cstm_normal_para">Isaiah 60:1</cite>
                </blockquote>   
                <blockquote>
                    <p className="text_cstm_normal_para">"But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.”</p>
                    <cite className="text_cstm_normal_para"> Matthew 6:33</cite>
                </blockquote>   
                <blockquote>
                    <p className="text_cstm_normal_para">"Delight thyself also in the Lord; and he shall give thee the desires of thine heart.”</p>
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
                        <p>At Geelong Pentecostal Assembly, we believe that everyone deserves a second chance, a new beginning, and a place to truly belong. No matter your past, your background, or where you are in your spiritual journey — you are welcome here. </p>
                        <p>We are more than just a church. We are a spirit-filled family rooted in love, faith, and hope. Our congregation is a beautiful reflection of the diversity of Geelong — people of all ages, cultures, and walks of life, united by the transforming power of Jesus Christ.</p>
                        <p>Each week, we come together to worship, pray, and grow — not as strangers, but as one community in Christ. Whether it's a powerful Sunday service, a quiet moment of reflection, or a shared meal during fellowship, we believe in walking side by side through life’s joys and struggles.</p>
                        <p>If you're feeling lost, tired, or searching for purpose, know this — God has not forgotten you, and neither have we. Our doors and our hearts are wide open. Here, you’ll find a place to heal, to connect, and to rediscover the joy of living a life led by faith.</p>
                        <p> So whether you're just beginning to explore Christianity, returning after time away, or looking for a new church to call home, Geelong Pentecostal Assembly is here for you.</p>
                        <p>Welcome home. We’ve been waiting for you.</p>
                </div>
                <div className="childflexcstm">
                        <img src="../assets/images/main/praying.jpg" alt="Praying" />
                </div>
        </div>  
        </>
    )
}

export const Homefourdivs = () => {
    
    return(
        
        <>

            <div className="homefourdivcstm">
                {HomeFourDivChildArray.map((items, index) =>(
                            <HomeFourDivChildComp route={items.route} text={items.text} image={items.image} key={index}/>
                ))}
            </div>
        </>
    )
}

export const HomeFourDivChildComp:React.FC<HomeFourDivChildCompProps> = (Props) => {

    return(

        <>
            <a href={Props.route}>
                <div className="homefourdivchildcstm">
                    <p>{Props.text}</p>
                    <img src={Props.image} alt="Alt_Image"/>
                </div>
            </a>
        </>
    )
}

export const HomeJoinusonComp = () => {

    return(

        <>
            <div className="joinusondivcstm">
                <img src="../assets/images/main/reading_bible.jpg" alt="Join us" />
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