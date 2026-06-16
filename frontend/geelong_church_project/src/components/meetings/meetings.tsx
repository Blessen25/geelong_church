import { useState } from 'react';
import {
  Containercstm,
  ContainerWidthCstm,
  Flexwithgapcstmdivcol,
  Flexwithgapcstmdivrow,
  PopupModal,
  TitleinMaindiv,
} from '../extra';
import './meetings.css';
import PhoneNumberField from '../inputs/input';
import { Person } from '../../interface';

const Meetings_Component = () => {
  const [personCount, setPersonCount] = useState<number>(0);
  const [success, setSuccess] = useState('');
  const [commonerror, setcommonError] = useState('');

  const [formData, setFormData] = useState({
    fullname: '',
    emailaddress: '',
    age : '',
    phone: '',
    country: '',
    address: '',
  });
  

  const [persons, setPersons] = useState<Person[]>([]);

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prevErrors: any) => {
      const updatedErrors = { ...prevErrors };

      if (field === 'fullname' && String(value).trim()) {
        delete updatedErrors.fullname;
      }

      if (field === 'emailaddress' && String(value).trim()) {
        delete updatedErrors.emailaddress;
      }
      
      if (
      field === 'age' &&
      String(value).trim() &&
      Number(value) >= 1 &&
      Number(value) <= 120
    ) {
      delete updatedErrors.age;
    }
      

      if (field === 'phone' && String(value).trim()) {
        delete updatedErrors.phone;
      }

      return updatedErrors;
    });
  };

  const handlePersonChange = (
    index: number,
    field: 'name' | 'age',
    value: string
  ) => {
    const updatedPersons = [...persons];

    if (!updatedPersons[index]) {
      updatedPersons[index] = { name: '', age: '' };
    }

    updatedPersons[index][field] = value;
    setPersons(updatedPersons);

    const errorKey = `person_${index}_${field}`;

    setErrors((prevErrors: any) => {
      const updatedErrors = { ...prevErrors };

      if (field === 'name' && value.trim()) {
        delete updatedErrors[errorKey];
      }

      if (
        field === 'age' &&
        value.trim() &&
        Number(value) >= 1 &&
        Number(value) <= 130
      ) {
        delete updatedErrors[errorKey];
      }

      return updatedErrors;
    });
  };

  const handlePersonCountChange = (count: number) => {
    setPersonCount(count);

    setPersons(
      Array.from(
        { length: count },
        (_, index) => persons[index] || { name: '', age: '' }
      )
    );
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Full Name is required';
    }

    if (!formData.emailaddress.trim()) {
      newErrors.emailaddress = 'Email is required';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (
      Number(formData.age) < 1 ||
      Number(formData.age) > 120
    ) {
      newErrors.age = 'Enter a valid age';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    persons.forEach((person, index) => {
      if (!person.name.trim()) {
        newErrors[`person_${index}_name`] =
          `Person ${index + 1} Name is required`;
      }

      if (!person.age.trim()) {
        newErrors[`person_${index}_age`] =
          `Person ${index + 1} Age is required`;
      } else if (Number(person.age) < 1 || Number(person.age) > 130) {
        newErrors[`person_${index}_age`] =
          `Person ${index + 1} Age must be a valid age`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhoneChange = (phone: any, countryData: any) => {
  setFormData((prevData) => ({
    ...prevData,
    phone: '+' + phone,
    country: countryData?.name || 'Unknown',
  }));

};


  const API_URL = process.env.REACT_APP_API_URL
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setcommonError('');
    setSuccess('');
    

    if (!validateForm()) {
      return;
    }

    const payload = {

      fullname: formData.fullname,
      age: formData.age,
      mobilenumber: formData.phone,
      country: formData.country,
      emailaddress: formData.emailaddress,
      address: formData.address,
      additional_attendees_count: Number(personCount),
      attendees: persons,
    };
    
    console.log(payload);

    try {

      const response = await fetch(`${API_URL}submit-meeting-request/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      setcommonError("Failed to submit the form. Please check your input.")
      throw new Error('Failed to submit the form');
    }

    setSuccess("Form submitted successfully!");
    } catch(error) {

      console.error("Error from catch block", error);
    }
    
  };

  return (
    <>
      <TitleinMaindiv title="Meeting Registration" initialtitle="Home" />

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
                  Sorry there is no meeting scheduled at the moment, please check back later for updates on upcoming meetings and events. We look forward to welcoming you to our future gatherings!
                </p>
              </div>

              {/* <div className="meetingdetailsdiv">
                <p className="text_cstm_normal_para">
                  Event Name: Empowering Revival Meeting
                </p>
                <p className="text_cstm_normal_para">
                  Ministering: Pr. Merlin John
                </p>
                <p className="text_cstm_normal_para">
                  Date: June 6 Saturday
                </p>
                <p className="text_cstm_normal_para">
                  Time: 10:00 AM – 4:00 PM
                </p>
                <img src="assets/images/main/geelong_revival_banner.png" alt="Geelong Revival Banner" loading='lazy' className='meetingimage'/>
              </div> */}

              <form className="meetingreqform" onSubmit={handleSubmit}>
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
                        value={formData.fullname}
                        onChange={(e) =>
                          handleInputChange('fullname', e.target.value)
                        }
                      />

                      {errors.fullname && (
                        <p className="errordivcstm">{errors.fullname}</p>
                      )}
                    </Flexwithgapcstmdivcol>

                    <Flexwithgapcstmdivcol>
                    <div className="stardiv">
                      <p className="inputformptag">Age</p>
                      <span className="starcstm">*</span>
                    </div>

                    <input
                      name="age"
                      type="number"
                      placeholder="Enter Your Age"
                      className="inputformcstm"
                      min={1}
                      max={120}
                      value={formData.age}
                      onChange={(e) =>
                        handleInputChange('age', e.target.value)
                      }
                    />

                    {errors.age && (
                      <p className="errordivcstm">{errors.age}</p>
                    )}
                  </Flexwithgapcstmdivcol>

                    
                  </Flexwithgapcstmdivrow>

                  <Flexwithgapcstmdivrow parentClassname="flex-direction-col-575px">
                    
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
                        value={formData.emailaddress}
                        onChange={(e) =>
                          handleInputChange('emailaddress', e.target.value)
                        }
                      />

                      {errors.emailaddress && (
                        <p className="errordivcstm">{errors.emailaddress}</p>
                      )}
                    </Flexwithgapcstmdivcol>

                    <Flexwithgapcstmdivcol>
                      <PhoneNumberField

                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />

                      {errors.phone && (
                        <p className="errordivcstm">{errors.phone}</p>
                      )}
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
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange('address', e.target.value)
                        }
                      />
                    </Flexwithgapcstmdivcol>

                    <Flexwithgapcstmdivcol>
                      <div className="stardiv">
                        <p className="inputformptag">
                          Are there additional attendees?
                        </p>
                        <span className="starcstm">*</span>
                      </div>

                      <div className="select-wrapper-cstm">
                        <select
                          className="inputformcstm selectapperance"
                          value={personCount}
                          onChange={(e) =>
                            handlePersonCountChange(Number(e.target.value))
                          }
                        >
                          {Array.from({ length: 6 }, (_, index) => (
                            <option
                              key={index}
                              value={index}
                              className="optionclass"
                            >
                              {index}
                            </option>
                          ))}
                        </select>

                        <i className="fa-solid fa-chevron-down fontawesomeiconsprayer"></i>
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
                          <p className="inputformptag">
                            Name Person {index + 1}
                          </p>
                          <span className="starcstm">*</span>
                        </div>

                        <input
                          name={`person_${index}_name`}
                          type="text"
                          placeholder={`Enter Person ${index + 1} Name`}
                          className="inputformcstm"
                          maxLength={30}
                          value={persons[index]?.name || ''}
                          onChange={(e) =>
                            handlePersonChange(index, 'name', e.target.value)
                          }
                        />

                        {errors[`person_${index}_name`] && (
                          <p className="errordivcstm">
                            {errors[`person_${index}_name`]}
                          </p>
                        )}
                      </Flexwithgapcstmdivcol>

                      <Flexwithgapcstmdivcol>
                        <div className="stardiv">
                          <p className="inputformptag">
                            Age Person {index + 1}
                          </p>
                          <span className="starcstm">*</span>
                        </div>

                        <input
                          name={`person_${index}_age`}
                          type="number"
                          placeholder={`Enter Person ${index + 1} Age`}
                          className="inputformcstm"
                          min={1}
                          max={130}
                          value={persons[index]?.age || ''}
                          onChange={(e) =>
                            handlePersonChange(index, 'age', e.target.value)
                          }
                        />

                        {errors[`person_${index}_age`] && (
                          <p className="errordivcstm">
                            {errors[`person_${index}_age`]}
                          </p>
                        )}
                      </Flexwithgapcstmdivcol>
                    </Flexwithgapcstmdivrow>
                  ))}

                  {/* <button
                    type="submit"
                    className="submitbuttoncontactcstm"
                    style={{ cursor: 'pointer' }}
                  >
                    Submit
                  </button> */}
                </Flexwithgapcstmdivcol>
              </form>
              {success && 
              <>
                <PopupModal variant='success' modalSubtitle='Your registration has been submitted successfully' isOpen={true} primaryButtonText='Go To Home'/>
              </>}
              {commonerror && 
              <>
                <PopupModal variant='error' modalSubtitle={"There has been some issues while submitting your registration, please try again later!"} isOpen={true} primaryButtonText='Go To Home'/>
              </>}
            </>
          }
        />
      </Containercstm>
    </>
  );
};

export default Meetings_Component;