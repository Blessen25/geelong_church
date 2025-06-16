import React, { use, useState } from "react";
import 'react-phone-input-2/lib/style.css';
import { Flexwithgapcstmdivcol } from "../extra";
import PhoneInput from "react-phone-input-2";
import './input.css';
import { PhoneNumberFieldProps } from "../../interface";

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = (Props) => {

    return(
        <>
            <Flexwithgapcstmdivcol>
                <p className="inputformptag">Phone</p>
                <PhoneInput 
                country={'au'}
                value={Props.value}
                onChange={(value, countryData) => {
                    console.log(value, countryData);
                    Props.onChange(value, countryData);
                }}
                inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    maxLength: 20,
                }}
                inputClass="phoneinputformcstm"
                />
            </Flexwithgapcstmdivcol>
        </>
    )

}

export default PhoneNumberField;