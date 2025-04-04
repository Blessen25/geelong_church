import React from "react";
import './extra.css';
import { ContainerdivProps } from "../interface";

export const Containerdiv:React.FC<ContainerdivProps> = (Props) => {

    return(

        <>
            <div className="containercstm">
                {Props.children}
            </div>
        </>
    )
}