import React, { use, useState } from "react";
import 'react-phone-input-2/lib/style.css';
import { Flexwithgapcstmdivcol } from "../extra";
import PhoneInput from "react-phone-input-2";
import './input.css';

const PhoneNumberField = () => {

    const [phonevalue , setPhoneValue] = useState('');
    return(
        <>
            <Flexwithgapcstmdivcol>
                <p className="inputformptag">Phone</p>
                <PhoneInput 
                country={'au'}
                value={''}
                onChange={setPhoneValue}
                inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true
                }}
                inputClass="phoneinputformcstm"
                />
            </Flexwithgapcstmdivcol>
        </>
    )

}

export default PhoneNumberField;