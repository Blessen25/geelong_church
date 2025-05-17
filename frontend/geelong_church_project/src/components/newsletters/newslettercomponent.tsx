import React from "react";
import './newsletter.css';
import { Containercstm, ContainerWidthCstm, TitleinMaindiv } from "../extra";

export const NewletterComponent = () => {

    return(

        <>
            <TitleinMaindiv title={"Newsletter"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <h1 style={{textAlign:"center"}}>Comming Soon</h1>
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}