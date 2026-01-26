import { Containercstm, ContainerWidthCstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, TitleinMaindiv } from '../extra';
import PhoneNumberField from '../inputs/input';
import './prayer.css';
import { useState } from 'react';

/* For Date Picker */
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';

type ContactMethod = "Phone" | "Text" | "Email" | "WhatsApp";
type VisitingFirstTime = "Yes" | "No";
type HearAboutUs = "Friend / Family" | "Social Media" | "Google" | "Walked In" |"Other";
type AttendAnotherChurch = "Yes" | "No";
type PrayerWithSomeone = "Yes" | "No";
type ContactFromPastor = "Yes" | "No";
type AreasYouWouldLikePrayerFor ="Healing" | "Family" | "Finances" | "Marriage" | "Children" | "Spiritual Growth" | "Freedom / Deliverance" | "Salvation" | "Other";
 

const PrayerRequest = () => {

     const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const [commonerror, setcommonError] = useState("");

    const [fullnameError, setFullnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [visitDate, setVisitDate] = useState<Date | null>(null);

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
    country: "",
    address: "",
    dateofbirth: "",

    contactmethod: "Phone",
    visitingfirsttime: "Yes",
    hearaboutus: "Friend / Family",
    hearaboutother: "",

    attendanotherchurch: "No",
    ifyeschurchname: "",

    areasforprayer: "Spiritual Growth",
    areaother: "",

    prayerwithsomeone: "No",
    contactfrompastor: "No",

    prayerrequestmessage: "",
    });

    const [charCount, setCharCount] = useState({
        fullname: 0,
        emailaddress: 0,
        phonenumber: 0,
        address: 0,
        hearaboutother: 0,
        ifyeschurchname: 0,
        areaother: 0,
        prayerrequestmessage: 0,
    });

    const MAX_LENGTHS = {
        fullname: 30,
        emailaddress: 50,
        phonenumber: 20,
        address: 200,
        hearaboutother: 60,
        ifyeschurchname: 100,
        areaother: 50,
        prayerrequestmessage: 1500,
    };
    
    /* Error handling */
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;

        setFormData((prev) => {

            const updated = { ...prev, [name]: value };
            console.log("Updated Form Data:", updated);
            return updated;
        });

        if (name in charCount) {

            setCharCount((prev) => ({ ...prev, [name]: value.length }));
        }

        if (name === "fullname") {
        if (!value) setFullnameError("Please enter your full name.");
        else if (value.length >= MAX_LENGTHS.fullname) setFullnameError("Max Characters Filled");
        else setFullnameError("");
        }

        if (name === "emailaddress") {
        if (!value) setEmailError("Please enter an email.");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) setEmailError("Please enter a valid email address.");
        else if (value.length >= MAX_LENGTHS.emailaddress) setEmailError("Max Characters Filled");
        else setEmailError("");
        }

        if (name === "address") {
        if (value.length >= MAX_LENGTHS.address) setAddressError("Max Characters Filled");
        else setAddressError("");
        }

        if (name === "prayerrequestmessage") {
        if (!value) setMessageError("Please enter your prayer request.");
        else if (value.length >= MAX_LENGTHS.prayerrequestmessage) setMessageError("Max Characters Filled");
        else setMessageError("");
        }
    };

    const handlePhoneChange = (phone: any, countryData: any) => {
        setFormData((prev) => ({
        ...prev,
        phonenumber: "+" + phone,
        country: countryData?.name || "Unknown",
        }));

        if (!phone) setPhoneError("Please enter a phone number.");
        else if (("+" + phone).length >= MAX_LENGTHS.phonenumber) setPhoneError("Max Characters Filled");
        else setPhoneError("");
    };

    const syncSelect = () => {
        setFormData((prev) => ({
        ...prev,
        contactmethod: contactMethod,
        visitingfirsttime: firsttime,
        hearaboutus: hearAboutUs,
        hearaboutother: hearAboutUs === "Other" ? hearAboutOther : "",
        attendanotherchurch: attendAnotherChurch,
        ifyeschurchname: attendAnotherChurch === "Yes" ? ifyesChurchName : "",
        areasforprayer: areasYouWouldLikePrayerFor,
        areaother: areasYouWouldLikePrayerFor === "Other" ? areaother : "",
        prayerwithsomeone: prayerWithSomeone,
        contactfrompastor: contactFromPastor,
        }));
    };

    const API_URL = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setcommonError("");
        setSuccess("");
        setFullnameError("");
        setEmailError("");
        setPhoneError("");
        setAddressError("");
        setMessageError("");

        syncSelect();

        let valid = true;

        if (!formData.fullname) {
        setFullnameError("Please enter your full name.");
        valid = false;
        }

        if (!formData.emailaddress) {
        setEmailError("Please enter an email.");
        valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailaddress)) {
        setEmailError("Please enter a valid email address.");
        valid = false;
        }

        if (!formData.phonenumber) {
        setPhoneError("Please enter a phone number.");
        valid = false;
        }

        if (!formData.prayerrequestmessage) {
        setMessageError("Please enter your prayer request.");
        valid = false;
        }

        if (!valid) return;

        // date handling
        const dob = visitDate ? visitDate.toISOString().slice(0, 10) : "";
        const payload = {
        ...formData,
        dateofbirth: dob,
        hearaboutother: hearAboutUs === "Other" ? hearAboutOther : "",
        ifyeschurchname: attendAnotherChurch === "Yes" ? ifyesChurchName : "",
        areaother: areasYouWouldLikePrayerFor === "Other" ? areaother : "",
        contactmethod: contactMethod,
        visitingfirsttime: firsttime,
        hearaboutus: hearAboutUs,
        attendanotherchurch: attendAnotherChurch,
        areasforprayer: areasYouWouldLikePrayerFor,
        prayerwithsomeone: prayerWithSomeone,
        contactfrompastor: contactFromPastor,
        };

        try {
        console.log("Sending payload:", JSON.stringify(payload));

        const response = await fetch(`${API_URL}prayers/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const text = await response.text();
        let result: any = text;
        try {
            result = JSON.parse(text);
        } catch {}

        if (!response.ok) {
            console.log("Error response from server:", result);
            setcommonError(result?.message || "Failed to submit the prayer request. Please check your input.");
            return;
        }

        setSuccess("Your prayer request has been submitted successfully!");
        setFormData({
            fullname: "",
            emailaddress: "",
            phonenumber: "",
            country: "",
            address: "",
            dateofbirth: "",

            contactmethod: "Phone",
            visitingfirsttime: "Yes",
            hearaboutus: "Friend / Family",
            hearaboutother: "",

            attendanotherchurch: "No",
            ifyeschurchname: "",

            areasforprayer: "Spiritual Growth",
            areaother: "",

            prayerwithsomeone: "No",
            contactfrompastor: "No",

            prayerrequestmessage: "",
        });

        setHearAboutOther("");
        setIfyesChurchName("");
        setAreaother("");
        setVisitDate(null);

        setTimeout(() => {
            navigate("/");
        }, 1500);
        } catch (err) {
        console.error(err);
        setcommonError("Something went wrong. Please try again.");
        }
    };
    return(

        <>
            <TitleinMaindiv title="Prayer Request" initialtitle= "Home"/>
            <Containercstm>
                <ContainerWidthCstm children={<>
                        <h1 className='text_cstm_big_heading'>We’re so glad you are here.</h1>
                        <p className="text_cstm_normal_para">Please take a moment to fill this out so we can serve and pray for you.</p>
                        <form className='prayerreqform' onSubmit={handleSubmit}>
                            <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                                <h1 className="text_cstm_big_heading">Personal Information</h1>
                                {success && <div className="successdivgreen">{success}</div>}
                                {commonerror && <p className="errordivcstm">{commonerror}</p>}
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Full Name</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <input name="fullname" type="text" placeholder="Enter Your Full Name"  className="inputformcstm" maxLength={30} value={formData.fullname} onChange={handleInputChange}/>
                                        {fullnameError && <p className="errordivcstm">{fullnameError}</p>}
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Email</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <input name="emailaddress" type="email" placeholder="Enter Your Email"  className="inputformcstm" maxLength={50} value={formData.emailaddress} onChange={handleInputChange}/>
                                        {emailError && <p className="errordivcstm">{emailError}</p>}
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow>
                                    <Flexwithgapcstmdivcol>
                                        <PhoneNumberField value={formData.phonenumber} onChange={handlePhoneChange} />
                                        {phoneError && <p className="errordivcstm">{phoneError}</p>}
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Address</p>
                                        <input name="address" type="text" placeholder="Enter Your Home Address" className="inputformcstm" maxLength={200} value={formData.address} onChange={handleInputChange}/>
                                        {addressError && <p className="errordivcstm">{addressError}</p>}
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
                                        <textarea name="prayerrequestmessage" placeholder="Enter Your Prayer Request" className="inputformmessagecstm" maxLength={1500} value={formData.prayerrequestmessage} onChange={handleInputChange}/>
                                        {messageError && <p className="errordivcstm">{messageError}</p>}
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