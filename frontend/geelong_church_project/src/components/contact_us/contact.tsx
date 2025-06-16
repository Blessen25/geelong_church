import React, { use, useState } from "react";
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

    const [success, setSuccess] = useState('');
    const [commonerror, setcommonError] = useState('');
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        phone_number: '',
        subject: '',
        message: '',
    })

    const handleIInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const updated = { ...prevData, [name]: value };
            console.log("Form Data Updated:", updated);
            return updated;
        });
    };

    const handlePhoneChange = (phone:any) => {
        setFormData((prevData)=> ({
            ...prevData,
            phone_number: phone
        }))
    }

    const API_URL = process.env.REACT_APP_API_URL

    const handleSubmit = async (e: any) => {
            e.preventDefault();
            setcommonError('');
            setSuccess('');

            // Client-side validation
            if (!formData.name) {
                setcommonError('Please enter your name.');
                return;
            }
            if (!formData.email) {
                setcommonError('Please enter your email.');
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setcommonError('Please enter a valid email address.');
                return;
            }
            if (!formData.phone_number) {
                setcommonError('Please enter your phone number.');
                return;
            }
            if (!formData.subject) {
                setcommonError('Please enter a subject.');
                return;
            }
            if (!formData.message) {
                setcommonError('Please enter your message.');
                return;
            }

            try {
                console.log('Sending payload:', JSON.stringify(formData)); // Debug log
                const response = await fetch(`${API_URL}contact/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    const errorData = await response.json(); // Parse the error response
                    console.log('Error response from server:', errorData); // Log the error details
                    setcommonError(errorData.message || 'Failed to submit the form. Please check your input.');
                    throw new Error('Failed to submit the form');
                }

                const result = await response.json();
                setSuccess('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    subject: '',
                    message: '',
                });
            } catch (err) {
                console.error(err);
            }
        };

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
                            {success && 
                            <>
                                <div className="alert alert-success" role="alert">
                                    <strong>{success}</strong>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </>}
                            <h1 className="text_cstm_big_heading">Let’s Connect</h1>
                            <p className="text_cstm_normal_para textalign_cstmjustify">Have a question or need assistance? Simply fill out the form with your inquiry or reach out to us directly via the email or phone number listed above.</p>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Name</p>
                                        <input name="name" type="text" placeholder="Enter Your Name" required className="inputformcstm" maxLength={30} value={formData.name} onChange={handleIInputChange}/>
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Email</p>
                                        <input name="email" type="email" placeholder="Enter Your Email" required className="inputformcstm" maxLength={50} value={formData.email} onChange={handleIInputChange}/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <PhoneNumberField value={formData.phone_number} onChange={handlePhoneChange}/>
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Subject</p>
                                        <input name="subject" type="text" placeholder="Enter Subject" required className="inputformcstm" maxLength={200} value={formData.subject} onChange={handleIInputChange}/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Message</p>
                                        <textarea name="message" placeholder="Enter Your Message" required className="inputformmessagecstm" maxLength={500} value={formData.message} onChange={handleIInputChange}/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <button type="submit" className="submitbuttoncontactcstm" onClick={handleSubmit}>Submit</button>
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
