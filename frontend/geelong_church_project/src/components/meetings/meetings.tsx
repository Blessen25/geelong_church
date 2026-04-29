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
import { Person } from '../../interface';

const Meetings_Component = () => {
  const [personCount, setPersonCount] = useState<number>(1);
  
  const [formData, setFormData] = useState({
    fullname: '',
    emailaddress: '',
    dob: null as Date | null,
    phone: '',
    address: '',
  });

  const [persons, setPersons] = useState<Person[]>([
    { name: '', age: '' },
  ]);

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
};

  const [errors, setErrors] = useState<any>({});

  const handlePersonCountChange = (count: number) => {
    setPersonCount(count);

    setPersons(
      Array.from({ length: count }, (_, index) => persons[index] || { name: '', age: '' })
    );
  };

  const validateForm = () => {

    const newErrors: any = {};

    if (!formData.fullname.trim()) {

      newErrors.fullname = "Full Name is required";
    }

    if (!formData.emailaddress.trim()) {
      newErrors.emailaddress = "Email is required";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    persons.forEach((person, index) => {

      if (!person.name.trim()) {
        newErrors[`person_${index}_name`] = `Person ${index + 1} Name is required`;
      }

      if (!person.age.trim()) {
        newErrors[`person_${index}_age`] = `Person ${index + 1} Age is required`;
      }else if(Number(person.age) < 1 || Number(person.age) > 130){
        newErrors[`person_${index}_age`] = `Person ${index + 1} Age must be a valid age`;
    }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!validateForm()) {

      return;  
    }

    console.log('Form submitted successfully');
  };
  

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
                      />
                      {errors.fullname && <p className="errordivcstm">{errors.fullname}</p>}
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
                      {errors.emailaddress && <p className="errordivcstm">{errors.emailaddress}</p>}
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
                      {errors.dob && <p className="errordivcstm">{errors.dob}</p>}
                    </Flexwithgapcstmdivcol>

                    <Flexwithgapcstmdivcol>
                      <PhoneNumberField
                        value={''}
                        onChange={(phone: string, country: any) => {
                          console.log(phone, country);
                        }}
                      />
                      {errors.phone && <p className="errordivcstm">{errors.phone}</p>}
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
                          onChange={(e) => handlePersonCountChange(Number(e.target.value))}
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
                            <p className="inputformptag">Name (Person {index + 1})</p>
                            <span className="starcstm">*</span>
                        </div>
                        <input
                          name={`person_${index + 1}_name`}
                          type="text"
                          placeholder={`Enter Person ${index + 1} Name`}
                          className="inputformcstm"
                          maxLength={30}
                          value={persons[index]?.name || ""}
                          onChange={(e) => handlePersonChange(index, "name", e.target.value)}
                        />  
                        {errors[`person_${index}_name`] && (
                          <p className="errordivcstm">{errors[`person_${index}_name`]}</p>
                        )}
                      </Flexwithgapcstmdivcol>

                      <Flexwithgapcstmdivcol>
                        <div className="stardiv">
                            <p className="inputformptag">Age (Person {index + 1})</p>
                            <span className="starcstm">*</span>
                        </div>
                        <input
                          name={`person_${index + 1}_age`}
                          type="number"
                          placeholder={`Enter Person ${index + 1} Age`}
                          className="inputformcstm"
                          min={1}
                          max={120}
                          value={persons[index]?.age || ""}
                          onChange={(e) => handlePersonChange(index, "age", e.target.value)}
                        />
                        {errors[`person_${index}_age`] && (
                          <p className="errordivcstm">{errors[`person_${index}_age`]}</p>
                        )}
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