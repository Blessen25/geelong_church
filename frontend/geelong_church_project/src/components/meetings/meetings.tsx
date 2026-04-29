import { useState } from 'react';
import DatePicker from 'react-datepicker';
import {
  Containercstm,
  ContainerWidthCstm,
  Flexwithgapcstmdivcol,
  Flexwithgapcstmdivrow,
  TitleinMaindiv,
} from '../extra';
import './meetings.css';
import PhoneNumberField from '../inputs/input';

const Meetings_Component = () => {
  const [personCount, setPersonCount] = useState<number>(1);

  return (
    <>
      <TitleinMaindiv title="Meeting Request" initialtitle="Home" />

      <Containercstm>
        <ContainerWidthCstm
          children={
            <>
              <h1 className="text_cstm_big_heading">Registration Form</h1>
              <p className="text_cstm_normal_para">
                Fill in your details and we’ll get back to you.
              </p>

              <h1 className="text_cstm_big_heading">Meeting Details</h1>

              <div className="meetingdetailsdiv">
                <p className="text_cstm_normal_para">
                  Event Name: Empowering Revival Meeting
                </p>
                <p className="text_cstm_normal_para">
                  Ministering: PR. Merlin John
                </p>
                <p className="text_cstm_normal_para">
                  Date: June 6 (Saturday)
                </p>
                <p className="text_cstm_normal_para">
                  Time: 10:00 AM – 4:00 PM
                </p>
              </div>

              <form className="meetingreqform" action="#">
                <Flexwithgapcstmdivcol parentClassname="contactdetailsdivcolcstm">
                  <h1 className="text_cstm_big_heading">
                    Personal Information
                  </h1>

                  <Flexwithgapcstmdivrow parentClassname="flex-direction-col-575px">
                    <Flexwithgapcstmdivcol>
                      <div className="stardiv">
                        <p className="inputformptag">Full Name</p>
                        <span className="starcstm">*</span>
                      </div>
                      <input
                        name="fullname"
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="inputformcstm"
                        maxLength={30}
                      />
                    </Flexwithgapcstmdivcol>

                    <Flexwithgapcstmdivcol>
                      <div className="stardiv">
                        <p className="inputformptag">Email</p>
                        <span className="starcstm">*</span>
                      </div>
                      <input
                        name="emailaddress"
                        type="email"
                        placeholder="Enter Your Email"
                        className="inputformcstm"
                        maxLength={50}
                      />
                    </Flexwithgapcstmdivcol>
                  </Flexwithgapcstmdivrow>

                  <Flexwithgapcstmdivrow parentClassname="flex-direction-col-575px">
                    <Flexwithgapcstmdivcol>
                      <div className="stardiv">
                        <p className="inputformptag">Date of Birth</p>
                        <span className="starcstm">*</span>
                      </div>

                      <div className="datepickerwraper">
                        <DatePicker
                          dateFormat="dd/MM/yyyy"
                          className="inputformcstm"
                          placeholderText="DD/MM/YYYY"
                        />
                        <i className="fa-regular fa-calendar"></i>
                      </div>
                    </Flexwithgapcstmdivcol>

                    <Flexwithgapcstmdivcol>
                      <PhoneNumberField
                        value={'+61416416738'}
                        onChange={(phone: string, country: any) => {
                          console.log(phone, country);
                        }}
                      />
                    </Flexwithgapcstmdivcol>
                  </Flexwithgapcstmdivrow>

                  <Flexwithgapcstmdivrow parentClassname="flex-direction-col-575px">
                    <Flexwithgapcstmdivcol>
                      <p className="inputformptag">Address</p>
                      <input
                        name="address"
                        type="text"
                        placeholder="Enter Your Home Address"
                        className="inputformcstm"
                        maxLength={200}
                      />
                    </Flexwithgapcstmdivcol>

                    <Flexwithgapcstmdivcol>
                        <div className="stardiv">
                            <p className="inputformptag">Number of persons attending</p>
                            <span className="starcstm">*</span>
                        </div>

                      <div className="select-wrapper-cstm">
                        <select
                          className="inputformcstm selectapperance"
                          value={personCount}
                          onChange={(e) =>
                            setPersonCount(Number(e.target.value))
                          }
                        >
                          {Array.from({ length: 5 }, (_, index) => (
                            <option
                              key={index + 1}
                              value={index + 1}
                              className="optionclass"
                            >
                              {index + 1}
                            </option>
                          ))}
                        </select>

                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </Flexwithgapcstmdivcol>
                  </Flexwithgapcstmdivrow>

                  {Array.from({ length: personCount }, (_, index) => (
                    <Flexwithgapcstmdivrow
                      key={index}
                      parentClassname="flex-direction-col-575px"
                    >
                      <Flexwithgapcstmdivcol>
                        <div className="stardiv">
                            <p className="inputformptag">Person {index + 1} Name</p>
                            <span className="starcstm">*</span>
                        </div>
                        <input
                          name={`person_${index + 1}_name`}
                          type="text"
                          placeholder={`Enter Person ${index + 1} Name`}
                          className="inputformcstm"
                          maxLength={30}
                        />
                      </Flexwithgapcstmdivcol>

                      <Flexwithgapcstmdivcol>
                        <div className="stardiv">
                            <p className="inputformptag">Person {index + 1} Age</p>
                            <span className="starcstm">*</span>
                        </div>
                        <input
                          name={`person_${index + 1}_age`}
                          type="number"
                          placeholder={`Enter Person ${index + 1} Age`}
                          className="inputformcstm"
                          min={1}
                          max={120}
                        />
                      </Flexwithgapcstmdivcol>
                    </Flexwithgapcstmdivrow>
                  ))}

                  <button
                    type="submit"
                    className="submitbuttoncontactcstm"
                    style={{ cursor: 'pointer' }}
                  >
                    Submit
                  </button>
                </Flexwithgapcstmdivcol>
              </form>
            </>
          }
        />
      </Containercstm>
    </>
  );
};

export default Meetings_Component;