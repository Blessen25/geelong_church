import './planyourvisit.css';
import { ButtonwithtextComponentColor, Containercstm, ContainerWidthCstm, Flexwithgapcstmdivrow, TitleinMaindiv } from "../extra";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export const PlanYourVisitComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Plan Your Visit"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <PlanYourVisitdiv />
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}



export const PlanYourVisitdiv = () => {

    return(

        <>

            <div className="planyourvisitdiv">
                <Planyourvisittodaypara />
                <ServiceTimings />
                <WhattoExpect />
                <MapandLocation />
                <PrayerRequestdiv />
            </div>
        </>
    )
}

const Planyourvisittodaypara = () => {

    return(

        <>
            <p className="text_cstm_normal_para textalign_cstmjustify">Plan your visit today and experience the warmth of our community firsthand. Whether you're new to church, returning after a break, or just visiting Geelong we're excited to meet you!</p>
        </>
    )
}

const ServiceTimings = () => {

    return(

        <>
            <h1 className="text_cstm_big_heading">Service Timings</h1>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Sunday Service ( English & Malayalam ) : 10:00 am</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Sunday School : 09:00 am</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Morning Prayer ( Monday - Friday ) : 05:15 am - 06:30 am</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Youth Meeting ( 1st Sunday of every month ) : 11:30 pm</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Ladies Meeting ( Thursday ) : 07:00 pm - 08:00 pm</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Intercessory Prayer ( Saturday ) : 06:30 pm - 08:30 pm</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Fasting Prayer ( 2nd Weekend of every month )</p>
            </Flexwithgapcstmdivrow>
        </>
    )
}

const MapandLocation = () => {

    return(

        <>
            <h1 className="text_cstm_big_heading">Map & Location</h1>
            <Flexwithgapcstmdivrow parentClassname='mapandlocation'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.815943614274!2d144.3920993!3d-38.166109999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad415dc3eede4e5%3A0x6fce422d549ac0fd!2sGeelong%20Pentecostal%20Assembly!5e1!3m2!1sen!2sau!4v1747781123451!5m2!1sen!2sau" className="mapcstmstyle" style= {{ border:0 }} loading="lazy" rel="no-referrer-when-downgrade"></iframe>
             <img src="assets/images/main/loc.jpg" alt="Map Image" loading="lazy"/>
            </Flexwithgapcstmdivrow>
        </>
    )
}

const WhattoExpect = () => {

    return(

        <>
            <h1 className="text_cstm_big_heading">What To Expect</h1>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">A friendly, multicultural community where everyone is welcome</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">Spirit-led worship and teaching grounded in the Word of God</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">An environment where families, youth, and individuals can all feel at home</p>
            </Flexwithgapcstmdivrow>
        </>
    )
}

const PrayerRequestdiv = () => {

    return(

        <>
            <h1 className="text_cstm_big_heading">Prayer Request</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify"> We believe no one should walk alone. Our prayer team is here to stand with you, encourage you, and pray with faith and love.</p>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">🙏 Personal prayer</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">💬 Pastoral care</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">👨‍👩‍👧 Family & marriage support</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                    <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/> 
                    <p className="text_cstm_normal_para textalign_cstmjustify">🕊️ Spiritual guidance</p>
            </Flexwithgapcstmdivrow>
            <ButtonwithtextComponentColor label="Submit a Prayer Request" route="/prayerrequest" fullwidth={false} classname='submitprayerbtn'/>
                
        </>
    )
}