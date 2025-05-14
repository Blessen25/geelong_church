import React from "react";
import './contact.css';
import { Containercstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, Flexwithiconandtextparentdiv, TitleinMaindiv } from "../extra";
import { ContactDetailsArray } from "../../array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Contact_UsComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Contact Us"} initialtitle={"Home"} />
            <ContactDetailsdiv/>
        </>
    )
}

export const ContactDetailsdiv = () => {

    return(

        <>
            <Containercstm>
                <Flexwithgapcstmdivrow>
                    <Flexwithgapcstmdivrow>
                        <Flexwithgapcstmdivcol>
                            <div className="imagedivcontactus">
                                <img src="assets/images/main/ContactUs.jpg" alt="contact_us"/>
                            </div>
                        </Flexwithgapcstmdivcol>
                    </Flexwithgapcstmdivrow>
                    <Flexwithgapcstmdivrow>
                        <form>
                        <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                        <h1 className="text_cstm_big_heading">Get In Touch With Us</h1>
                        <p className="text_cstm_normal_para">Have a question or need assistance? Simply fill out the form with your inquiry or reach out to us directly via the email or phone number listed below.</p>
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
                        </Flexwithgapcstmdivcol>
                        </form>
                    </Flexwithgapcstmdivrow>
                </Flexwithgapcstmdivrow>
            </Containercstm>
        </>
    )
}

