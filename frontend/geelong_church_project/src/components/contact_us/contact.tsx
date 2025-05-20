import React from "react";
import './contact.css';
import { Containercstm, ContainerWidthCstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, TitleinMaindiv,  } from "../extra";
import { ContactDetailsArray } from "../../array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactcardDetailsdivProps } from "../../interface";
import { resolveTxt } from "dns";

export const Contact_UsComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Contact Us"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <ContactDetailsthreecarddiv />
                    <ContactDetailsdiv/>
                    <PlanYourVisitdiv />
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}

export const ContactDetailsdiv = () => {

    return(

        <>
                <Flexwithgapcstmdivrow parentClassname="contactdetailsdivrowcstm">
                    <Flexwithgapcstmdivrow>
                        <Flexwithgapcstmdivcol>
                            <div className="imagedivcontactus">
                                <img src="assets/images/main/contactus.jpg" alt="contact_us"/>
                                <img src="assets/images/main/contactusthree.jpg" alt="contact_us"/>
                            </div>
                        </Flexwithgapcstmdivcol>
                    </Flexwithgapcstmdivrow>
                    <Flexwithgapcstmdivrow>
                        <form>
                            <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                            <h1 className="text_cstm_big_heading">Let’s Connect</h1>
                            <p className="text_cstm_normal_para textalign_cstmjustify">Have a question or need assistance? Simply fill out the form with your inquiry or reach out to us directly via the email or phone number listed above.</p>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Name</p>
                                        <input type="text" placeholder="Enter Your Name" required className="inputformcstm" />
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Email</p>
                                        <input type="email" placeholder="Enter Your Email" required className="inputformcstm" />
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Subject</p>
                                        <input type="text" placeholder="Enter Subject" required className="inputformcstm" />
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Message</p>
                                        <textarea name="message" placeholder="Enter Your Message" required className="inputformmessagecstm"/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <button type="submit" className="submitbuttoncontactcstm">Submit</button>
                            </Flexwithgapcstmdivcol>
                        </form>
                    </Flexwithgapcstmdivrow>
                </Flexwithgapcstmdivrow>
        </>
    )
}


export const ContactDetailsthreecarddiv = () => {

    return(

        <>
            <div className="contactthreecarddiv">
                   <ContactcardDetailsdiv Icon={faLocationDot} title="Address" text="82 Wilsons Road, Newcomb, VIC"/>
                   <ContactcardDetailsdiv Icon={faPhone} title="Phone Number" text="+61494357534" ahref="tel:+61494357534"/>                
                   <ContactcardDetailsdiv Icon={faEnvelope} extracardClass="contactextraemaildiv" title="Email Address" text="geelongpentecostalassembly@gmail.com" ahref="mailto:geelongpentecostalassembly@gmail.com"/>
            </div>
        </>
    )
}

export const ContactcardDetailsdiv:React.FC<ContactcardDetailsdivProps> = (Props) => {

    return(
        <>
            <div className={`contactchildcarddiv ${Props.extracardClass ? Props.extracardClass : ''}`}>
                <div className="contactchildrounddiv">
                    <FontAwesomeIcon icon={Props.Icon} className="fontawesomeiconcontactcstm"/>
                </div>
                <div className="contactdetailsdiv">
                    <h1>{Props.title}</h1>
                    {Props.ahref ? (
                        <a href={Props.ahref ? Props.ahref : '#'} className="atagcontactdetailscard text_cstm_normal_para" rel="noopener noreferrer">{Props.text}</a>
                    ) : (
                        <p className="text_cstm_normal_para">{Props.text}</p>
                    )}
                </div>
            </div>
        </>
    )
}


export const PlanYourVisitdiv = () => {

    return(

        <>

            <div className="planyourvisitdiv">
                <h1 className="text_cstm_big_heading">Plan Your Visit</h1>
                <p className="text_cstm_normal_para textalign_cstmjustify">We look forward to welcoming you to Geelong Pentecostal Assembly. Plan your visit today and experience the warmth of our community firsthand.</p>
                <h1 className="text_cstm_medium_heading">Service Timings</h1>
                <p className="text_cstm_normal_para textalign_cstmjustify">Sunday Service ( English & Malayalam ) : 10:00 am</p>
                <p className="text_cstm_normal_para textalign_cstmjustify">Sunday School : 09:00 am</p>
                <p className="text_cstm_normal_para textalign_cstmjustify">Morning Prayer ( Monday - Friday ) : 05:15 am - 06:30 am</p>
                <p className="text_cstm_normal_para textalign_cstmjustify">Youth Meeting ( 1st Sunday of every month ) : 11:30 pm</p>
                <p className="text_cstm_normal_para textalign_cstmjustify">Ladies Meeting ( Thursday ) : 07:00 pm - 08:00 pm</p>
                <p className="text_cstm_normal_para textalign_cstmjustify">Intercessory Prayer ( Saturday ) : 06:30 pm - 08:30 pm</p>
                <p className="text_cstm_normal_para textalign_cstmjustify">Fasting Prayer ( 2nd Weekend of every month )</p>
                <h1 className="text_cstm_medium_heading">Map & Location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62866.324372587915!2d76.31149169101563!3d10.0048567013403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062785ea4b333b%3A0x1932c7092fddb7e!2sLourdes%20Hospital!5e0!3m2!1sen!2sin!4v1747758930527!5m2!1sen!2sin" className="mapcstmstyle" style= {{ border:0 }} loading="lazy" rel="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}