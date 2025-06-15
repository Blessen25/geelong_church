import React, { useState } from "react";
import './contact.css';
import { Containercstm, ContainerWidthCstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, TitleinMaindiv,  } from "../extra";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactcardDetailsdivProps } from "../../interface";
import PhoneNumberField from "../inputs/input";

export const Contact_UsComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Contact Us"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <ContactDetailsthreecarddiv />
                    <ContactDetailsdiv/>
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
                                        <PhoneNumberField />
                                    </Flexwithgapcstmdivcol>
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
