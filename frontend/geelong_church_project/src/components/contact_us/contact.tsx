import React from "react";
import './contact.css';
import { Containercstm, Flexwithgapcstmdivrow, TitleinMaindiv } from "../extra";

export const Contact_UsComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Contact Us"} initialtitle={"Home"} />
            <ContactDetailsdiv/>
        </>
    )
}

export const ContactDetailsdiv = () => {

    return(

        <>
            <Containercstm>
                <Flexwithgapcstmdivrow>
                    <div className="contactusdetailscardcstm">
                        
                    </div>
                </Flexwithgapcstmdivrow>
            </Containercstm>
        </>
    )
}

