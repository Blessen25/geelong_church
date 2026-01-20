import { Containercstm, ContainerWidthCstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, TitleinMaindiv } from '../extra';
import PhoneNumberField from '../inputs/input';
import './prayer.css';
import { useState } from 'react';

/* For Date Picker */
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

type ContactMethod = "Phone" | "Text" | "Email" | "WhatsApp";


const PrayerRequest = () => {

    const [visitDate, setVisitDate] = useState<Date>(new Date());

    const HandlePhoneChange = (phone: string, country: any) => {
        console.log("Phone number changed:", phone, country);
    };

    
    const [contactMethod, setContactMethod] = useState<ContactMethod>("Phone");
    return(

        <>
            <TitleinMaindiv title="Prayer Request" initialtitle= "Home"/>
            <Containercstm>
                <ContainerWidthCstm children={<>
                        <h1 className='text_cstm_big_heading'>We’re so glad you are here.</h1>
                        <p className="text_cstm_normal_para">Please take a moment to fill this out so we can serve and pray for you.</p>
                        <form>
                            <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                                <h1 className="text_cstm_big_heading">Personal Information</h1>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Full Name</p>
                                        <input name="name" type="text" placeholder="Enter Your Full Name" required className="inputformcstm" maxLength={30} />
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Email</p>
                                        <input name="email" type="email" placeholder="Enter Your Email" required className="inputformcstm" maxLength={50} />
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <PhoneNumberField value={"+61723823"} onChange={HandlePhoneChange}/>
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Address</p>
                                        <input name="subject" type="text" placeholder="Enter Your Home Address" required className="inputformcstm" maxLength={200} />
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                         <p className="inputformptag">Preferred Visit Date</p>
                                                <DatePicker
                                                    selected={visitDate}
                                                    onChange={(date:any) => date && setVisitDate(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="inputformcstm"   // ✅ YOUR style applied directly
                                                    placeholderText="DD/MM/YYYY"
                                                />
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Best way to contact you</p>

                                            <select
                                            className="inputformcstm"
                                            value={contactMethod}
                                            onChange={(e) => setContactMethod(e.target.value as ContactMethod)}
                                            >
                                            <option value="Phone">Phone</option>
                                            <option value="Text">Text</option>
                                            <option value="Email">Email</option>
                                            <option value="WhatsApp">WhatsApp</option>
                                            </select>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Message</p>
                                        <textarea name="message" placeholder="Enter Your Message" required className="inputformmessagecstm" maxLength={500}/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>

                                {/* <button type="submit" className="submitbuttoncontactcstm">Submit</button> */}
                            </Flexwithgapcstmdivcol>
                        </form>
                    </>} />
            </Containercstm>
        </>
    )
}

export default PrayerRequest;