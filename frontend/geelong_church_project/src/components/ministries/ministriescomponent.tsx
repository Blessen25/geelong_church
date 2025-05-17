import React from "react";
import './ministries.css';
import { Containercstm, ContainerWidthCstm, TitleinMaindiv } from "../extra";

export const MinistriesComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Ministries"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <MinistriesFirst />
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}


export const MinistriesFirst = () => {
    
    return(

        <>
            <div className="ministriesfirstdiv">

            </div>
        </>
    )
}