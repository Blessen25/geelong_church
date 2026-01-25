import { Containercstm, ContainerWidthCstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, TitleinMaindiv } from '../extra';
import PhoneNumberField from '../inputs/input';
import './prayer.css';
import { useState } from 'react';

/* For Date Picker */
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

type ContactMethod = "Phone" | "Text" | "Email" | "WhatsApp";
type VisitingFirstTime = "Yes" | "No";
type HearAboutUs = "Friend / Family" | "Social Media" | "Google" | "Walked In" |"Other";
type AttendAnotherChurch = "Yes" | "No";
type PrayerWithSomeone = "Yes" | "No";
type ContactFromPastor = "Yes" | "No";
type AreasYouWouldLikePrayerFor ="Healing" | "Family" | "Finances" | "Marriage" | "Children" | "Spiritual Growth" | "Freedom / Deliverance" | "Salvation" | "Other";
 

const PrayerRequest = () => {

    const [visitDate, setVisitDate] = useState<Date>(new Date());

    const HandlePhoneChange = (phone: string, country: any) => {
        console.log("Phone number changed:", phone, country);
    };

    
    const [contactMethod, setContactMethod] = useState<ContactMethod>("Phone");
    const [firsttime, setFirsttime] = useState<VisitingFirstTime>("Yes");
    const [hearAboutUs, setHearAboutUs] = useState<HearAboutUs>("Friend / Family");
    const [hearAboutOther, setHearAboutOther] = useState("");
    const [attendAnotherChurch, setAttendAnotherChurch] = useState<AttendAnotherChurch>("No");
    const [ifyesChurchName, setIfyesChurchName] = useState("");
    const [prayerWithSomeone, setPrayerWithSomeone] = useState<PrayerWithSomeone>("No");
    const [contactFromPastor, setContactFromPastor] = useState<ContactFromPastor>("No");
    const [areasYouWouldLikePrayerFor, setAreasYouWouldLikePrayerFor] = useState<AreasYouWouldLikePrayerFor>("Spiritual Growth");
    const [areaother, setAreaother] = useState("");

    const [formData, setFormData] = useState({
        fullname: "",
        emailaddress: "",
        phonenumber: "",
        address: "",
        dateofbirth: "",
        contactmethod: "",
        visitingfirsttime: "",
        hearaboutus: "",
        attendanotherchurch: "",
        areasforprayer: "",
        prayerwithsomeone: "",
        contactfrompastor: "",
        prayerrequestmessage: ""

    });
    
    /* Error handling */
    const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        
    }

    return(

        <>
            <TitleinMaindiv title="Prayer Request" initialtitle= "Home"/>
            <Containercstm>
                <ContainerWidthCstm children={<>
                        <h1 className='text_cstm_big_heading'>We’re so glad you are here.</h1>
                        <p className="text_cstm_normal_para">Please take a moment to fill this out so we can serve and pray for you.</p>
                        <form className='prayerreqform'>
                            <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                                <h1 className="text_cstm_big_heading">Personal Information</h1>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Full Name</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <input name="name" type="text" placeholder="Enter Your Full Name" required className="inputformcstm" maxLength={30} />
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Email</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <input name="email" type="email" placeholder="Enter Your Email" required className="inputformcstm" maxLength={50} />
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <PhoneNumberField value={"+61723823"} onChange={HandlePhoneChange}/>
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Address</p>
                                        <input name="subject" type="text" placeholder="Enter Your Home Address" className="inputformcstm" maxLength={200} />
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        
                                         <p className="inputformptag">Date of Birth</p>
                                            <div className="datepickerwraper">
                                                <DatePicker
                                                    selected={visitDate}
                                                    onChange={(date:any) => date && setVisitDate(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="inputformcstm"   
                                                    placeholderText="DD/MM/YYYY"
                                                />
                                            <i className="fa-regular fa-calendar"></i>
                                            </div>
                                            
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Best way to contact you</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                            <div className="select-wrapper-cstm">
                                                <select
                                                className="inputformcstm selectapperance"
                                                value={contactMethod}
                                                onChange={(e) => setContactMethod(e.target.value as ContactMethod)}
                                                >
                                                <option value="Phone" className='optionclass'>Phone</option>
                                                <option value="Text" className='optionclass'>Text</option>
                                                <option value="Email" className='optionclass'>Email</option>
                                                <option value="WhatsApp" className='optionclass'>WhatsApp</option>
                                                </select>
                                                <i className="fa-solid fa-chevron-down"></i>
                                            </div>
                                            
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>

                                {/* <button type="submit" className="submitbuttoncontactcstm">Submit</button> */}
                            </Flexwithgapcstmdivcol>
                            <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                                <h1 className="text_cstm_big_heading">About You</h1>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Are you visiting us for the first time?</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <div className="select-wrapper-cstm">
                                        <select
                                            className="inputformcstm selectapperance"
                                            value={firsttime}
                                            onChange={(e) => setFirsttime(e.target.value as VisitingFirstTime)}
                                            >
                                            <option value="Yes" className='optionclass'>Yes</option>
                                            <option value="No" className='optionclass'>No</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">How did you hear about our church?</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <div className="select-wrapper-cstm">
                                        <select
                                            className="inputformcstm selectapperance"
                                            value={hearAboutUs}
                                            onChange={(e) => setHearAboutUs(e.target.value as HearAboutUs)}
                                            >
                                            <option value="Friend / Family" className='optionclass'>Friend / Family</option>
                                            <option value="Social Media" className='optionclass'>Social Media</option>
                                            <option value="Google" className='optionclass'>Google</option>
                                            <option value="Walked In" className='optionclass'>Walked In</option>
                                            <option value="Other" className='optionclass'>Other</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                        {hearAboutUs === "Other" && (
                                        <input
                                            type="text"
                                            className="inputformcstm"
                                            placeholder="Please specify"
                                            value={hearAboutOther}
                                            onChange={(e) => setHearAboutOther(e.target.value)}
                                            maxLength={60}
                                        />
                                        )}
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Do you currently attend another church?</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <div className="select-wrapper-cstm">
                                        <select
                                            className="inputformcstm selectapperance"
                                            value={attendAnotherChurch}
                                            onChange={(e) => setAttendAnotherChurch(e.target.value as AttendAnotherChurch)}
                                            >
                                            <option value="Yes" className='optionclass'>Yes</option>
                                            <option value="No" className='optionclass'>No</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                        {attendAnotherChurch === "Yes" && (
                                        <input
                                            type="text"
                                            className="inputformcstm"
                                            placeholder="Please specify the church name"
                                            value={ifyesChurchName}
                                            onChange={(e) => setIfyesChurchName(e.target.value)}
                                            maxLength={100}
                                        />
                                        )}
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Areas you would like prayer for</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <div className="select-wrapper-cstm">
                                        <select
                                            className="inputformcstm selectapperance"
                                            value={areasYouWouldLikePrayerFor}
                                            onChange={(e) => setAreasYouWouldLikePrayerFor(e.target.value as AreasYouWouldLikePrayerFor)}
                                            >
                                            <option value="Healing" className='optionclass'>Healing</option>
                                            <option value="Family" className='optionclass'>Family</option>
                                            <option value="Finances" className='optionclass'>Finances</option>
                                            <option value="Marriage" className='optionclass'>Marriage</option>
                                            <option value="Children" className='optionclass'>Children</option>
                                            <option value="Spiritual Growth" className='optionclass'>Spiritual Growth</option>
                                            <option value="Freedom / Deliverance" className='optionclass'>Freedom / Deliverance</option>
                                            <option value="Salvation" className='optionclass'>Salvation</option>
                                            <option value="Other" className='optionclass'>Other</option>

                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                        {areasYouWouldLikePrayerFor === "Other" && (

                                        <input
                                            type="text"
                                            className="inputformcstm"
                                            placeholder="Please specify the areas you would like prayer for"
                                            value={areaother}
                                            onChange={(e) => setAreaother(e.target.value)}
                                            maxLength={50}
                                        />
                                        )}
                                        
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                {/* <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Message</p>
                                        <textarea name="message" placeholder="Enter Your Message" required className="inputformmessagecstm" maxLength={500}/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow> */}

                                {/* <button type="submit" className="submitbuttoncontactcstm">Submit</button> */}
                            </Flexwithgapcstmdivcol>
                            <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                                <h1 className="text_cstm_big_heading">Spiritual Support</h1>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Would you like someone to pray with you today?</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <div className="select-wrapper-cstm">
                                        <select
                                            className="inputformcstm selectapperance"
                                            value={prayerWithSomeone}
                                            onChange={(e) => setPrayerWithSomeone(e.target.value as PrayerWithSomeone)}
                                            >
                                            <option value="Yes" className='optionclass'>Yes</option>
                                            <option value="No" className='optionclass'>No</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Would you like a pastor or prayer team member to contact you?</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <div className="select-wrapper-cstm">
                                        <select
                                            className="inputformcstm selectapperance"
                                            value={contactFromPastor}
                                            onChange={(e) => setContactFromPastor(e.target.value as ContactFromPastor)}
                                            >
                                            <option value="Yes" className='optionclass'>Yes</option>
                                            <option value="No" className='optionclass'>No</option>
                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                            </Flexwithgapcstmdivcol>
                            <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                                <h1 className="text_cstm_big_heading">Prayer Request</h1>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Please share anything you would like us to pray for. All requests are kept confidential.</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <textarea name="message" placeholder="Enter Your Prayer Request" required className="inputformmessagecstm" maxLength={1500}/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                            </Flexwithgapcstmdivcol>
                            <button type="submit" className="submitbuttoncontactcstm">Submit</button>
                        </form>
                        
                    </>} />
            </Containercstm>
        </>
    )
}

export default PrayerRequest;