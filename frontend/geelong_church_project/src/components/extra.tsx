import React from "react";
import './extra.css';
import { ButtonwithtextComponentProps, ContainerdivProps } from "../interface";

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


export const ButtonwithtextComponentColor:React.FC<ButtonwithtextComponentProps> = (Props) => {

    return(
        <>
            <a href={`${Props.route ? Props.route : '#'}`} className={`buttonwithtextcstm ${Props.fullwidth ? 'w-100cstm' : ''} ${Props.classname ? Props.classname : ''}`}>{Props.label}</a>
        </>
    )
}

export const ButtonwithtextComponent:React.FC<ButtonwithtextComponentProps> = (Props) => {

    return(
        <>
            <a href={`${Props.route ? Props.route : '#'}`} className={`buttonwithtextcstmnormal ${Props.fullwidth ? 'w-100cstm' : ''} ${Props.classname ? Props.classname : ''}`}>{Props.label}</a>
        </>
    )
}