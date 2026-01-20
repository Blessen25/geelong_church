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
type WhatBringsYouToChurch = "Invited by a friend" | "Looking for a church community" | "Prayer" | "Curiosity" | "Recently moved to the area" | "Other";
type PrayerWithSomeone = "Yes" | "No";


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
    const [WhatBringsYou, setWhatBringsYou] = useState<WhatBringsYouToChurch>("Invited by a friend");
    const [ifyesOtherReason, setIfyesOtherReason] = useState("");
    const [prayerWithSomeone, setPrayerWithSomeone] = useState<PrayerWithSomeone>("Yes");

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
                                        <p className="inputformptag">Best way to contact you</p>
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
                                        <p className="inputformptag">Are you visiting us for the first time?</p>
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
                                        <p className="inputformptag">How did you hear about our church?</p>
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
                                        <p className="inputformptag">Do you currently attend another church?</p>
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
                                        <p className="inputformptag">What brings you to visit our church</p>
                                        <div className="select-wrapper-cstm">
                                        <select
                                            className="inputformcstm selectapperance"
                                            value={WhatBringsYou}
                                            onChange={(e) => setWhatBringsYou(e.target.value as WhatBringsYouToChurch)}
                                            >
                                            <option value="Invited by a friend" className='optionclass'>Invited by a friend</option>
                                            <option value="Looking for a church community" className='optionclass'>Looking for a church community</option>
                                            <option value="Prayer" className='optionclass'>Prayer</option>
                                            <option value="Curiosity" className='optionclass'>Curiosity</option>
                                            <option value="Recently moved to the area" className='optionclass'>Recently moved to the area</option>
                                            <option value="Other" className='optionclass'>Other</option>

                                        </select>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </div>
                                        {WhatBringsYou === "Other" && (
                                        <input
                                            type="text"
                                            className="inputformcstm"
                                            placeholder="Please specify the reason"
                                            value={ifyesOtherReason}
                                            onChange={(e) => setIfyesOtherReason(e.target.value)}
                                            maxLength={60}
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
                                        <p className="inputformptag">Would you like someone to pray with you today?</p>
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
                                        <p className="inputformptag">Would you like someone to pray with you today?</p>
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
                                </Flexwithgapcstmdivrow>
                            </Flexwithgapcstmdivcol>
                        </form>
                    </>} />
            </Containercstm>
        </>
    )
}

export default PrayerRequest;