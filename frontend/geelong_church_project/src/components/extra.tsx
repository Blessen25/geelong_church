import React from "react";
import './extra.css';
import { ButtonwithtextComponentProps, ContainerdivProps, FlexwithtextandimagedivProps, TitleinMaindivProps } from "../interface";

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

export const TitleinMaindiv:React.FC<TitleinMaindivProps> = (Props) => {

    return(
        <>
            <div className="mainshorttitlediv">
                <div className="mainshorttitlechilddiv">
                    <h1 className="text_cstm_big_heading ">{Props.title}</h1>
                    <div className="initialandrealtitle">
                        <p className="text_cstm_normal_para">{Props.initialtitle}</p>
                        <div className="dotintialandrealtitle"></div>
                        <p className="text_cstm_normal_para">{Props.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Containercstm:React.FC<ContainerdivProps> = (Props) => {

    return(
        <>
            <div className="containercstmnew">
                {Props.children}
            </div>
        </>
    )
}