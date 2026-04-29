import DatePicker from 'react-datepicker';
import { Containercstm, ContainerWidthCstm, Flexwithgapcstmdivcol, Flexwithgapcstmdivrow, TitleinMaindiv } from '../extra';
import './meetings.css';
import PhoneNumberField from '../inputs/input';

const Meetings_Component = () => {

    return(

        <>
            <TitleinMaindiv title="Meeting Request" initialtitle= "Home"/>
            <Containercstm>
                <ContainerWidthCstm children={
                    <>
                        <h1 className="text_cstm_big_heading">
                            Book a Meeting with Us
                        </h1>
                        <p className="text_cstm_normal_para">
                            Fill in your details and we’ll get back to you.
                        </p>
                        <form className='meetingreqform' action={'#'}>
                            <Flexwithgapcstmdivcol parentClassname='contactdetailsdivcolcstm'>
                                <h1 className="text_cstm_big_heading">Personal Information</h1>
                                <Flexwithgapcstmdivrow parentClassname='flex-direction-col-575px'>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Full Name</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <input name="fullname" type="text" placeholder="Enter Your Full Name"  className="inputformcstm" maxLength={30} />
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Email</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                        <input name="emailaddress" type="email" placeholder="Enter Your Email"  className="inputformcstm" maxLength={50}/>
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow parentClassname='flex-direction-col-575px'>
                                <Flexwithgapcstmdivcol>
                                        <div className="stardiv">
                                            <p className="inputformptag">Date of Birth</p>
                                            <span className="starcstm">*</span>
                                        </div>
                                            <div className="datepickerwraper">
                                                <DatePicker
                                                    // selected={"25/05/2001"}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="inputformcstm"   
                                                    placeholderText="DD/MM/YYYY"
                                                />
                                            <i className="fa-regular fa-calendar"></i>
                                            </div>
                                            
                                    </Flexwithgapcstmdivcol>
                                    <Flexwithgapcstmdivcol>
                                        <PhoneNumberField value={'+61416416738'} onChange={function (phone: string, country: any): void {
                                            throw new Error('Function not implemented.');
                                        } }  />
                                    </Flexwithgapcstmdivcol>
                                </Flexwithgapcstmdivrow>
                                <Flexwithgapcstmdivrow parentClassname='flex-direction-col-575px'>
                                   <Flexwithgapcstmdivcol>
                                        <p className="inputformptag">Address</p>
                                        <input name="address" type="text" placeholder="Enter Your Home Address" className="inputformcstm" maxLength={200}/>
                                    </Flexwithgapcstmdivcol>
                                    
                                </Flexwithgapcstmdivrow>
                                <button type="submit" className="submitbuttoncontactcstm" style={{cursor : 'pointer'}}>Submit</button>
                            </Flexwithgapcstmdivcol>
                        </form>
                    </>
                }/>
            </Containercstm>
        </>
    )
}

export default Meetings_Component;