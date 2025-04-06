import React from "react";
import './extra.css';
import { ContainerdivProps } from "../interface";

export const Containerdiv:React.FC<ContainerdivProps> = (Props) => {

    return(

        <>
            <div className={`containercstm ${Props.styles ? Props.styles : ''}`}>
                {Props.children}
            </div>
        </>
    )
}

export const NormalContainerdiv:React.FC<ContainerdivProps> = (Props) => {

    return(

        <>
            <div className={`normalcontainercstm ${Props.styles ? Props.styles : ''}`}>
                {Props.children}
            </div>
        </>
    )
}