import React from "react";
import './extra.css';
import { ButtonwithtextComponentProps, ContainerdivProps, FlexwithgapcstmdivProps, flexwithiconandtextdivProps, FlexwithiconandtextparentdivProps, FlexwithtextandimagedivProps, TitleinMaindivProps } from "../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch } from "@fortawesome/free-solid-svg-icons";

export const Containerdiv:React.FC<ContainerdivProps> = (Props) => {

    return(

        <>
            <div className={`containercstm ${Props.styles ? Props.styles : ''}`}>
                {Props.children}
            </div>
        </>
    )
}

export const ButtonwithtextComponentColor:React.FC<ButtonwithtextComponentProps> = (Props) => {

    return(
        <>
            <a href={`${Props.route ? Props.route : '#'}`} className={`buttonwithtextcstm ${Props.fullwidth ? 'w-100cstm' : ''} ${Props.classname ? Props.classname : ''}`} rel="noopener noreferrer">{Props.label}</a>
        </>
    )
}

export const ButtonwithtextComponent:React.FC<ButtonwithtextComponentProps> = (Props) => {

    return(
        <>
            <a href={`${Props.route ? Props.route : '#'}`} className={`buttonwithtextcstmnormal ${Props.fullwidth ? 'w-100cstm' : ''} ${Props.classname ? Props.classname : ''}`} rel="noopener noreferrer">{Props.label}</a>
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
            <div className={`containercstmnew ${Props.parentClassName ? Props.parentClassName : ''}`} style={Props.parentStyle}>
                {Props.children}
            </div>
        </>
    )
}

export const ContainerWidthCstm:React.FC<ContainerdivProps> = (Props) => {

    return(

        <>
            <div className="containerwidthcstm">
                {Props.children}
            </div>
        </>
    )
}

export const Flexwithiconandtextparentdiv:React.FC<FlexwithiconandtextparentdivProps> = (Props) => {

    return(

        <>
            <div className="flexwithiconandtextparentdiv">
                {Props.items.map((items,index)=>(
                    <Flexwithiconandtextdiv icon={items.icon} textPara={items.textPara} titleName={items.titleName}  key={index}/>
                ))}
            </div>
        </>
    )
}

export const Flexwithiconandtextdiv:React.FC<flexwithiconandtextdivProps> = (Props) => {

    return(
        <>
            <div className="flexwithiconandtextdivmaindiv">
                    <div className="flexwithicondiv">
                        <FontAwesomeIcon icon={Props.icon} className="fontawesomeiconflexcstm"/>
                    </div>
                    {Props.titleName ? (<h1 className="flexwithtexth1divcstm">{Props.titleName}</h1>) : ("")}
                    <p className="text_cstm_normal_para fontawesometextflexcstm">{Props.textPara}</p> 
            </div>
        </>
    )
}

export const Flexwithgapcstmdivcol:React.FC<FlexwithgapcstmdivProps> = (Props) => {

    return(
        <>
            <div className={`flexwithgapcstm ${Props.parentClassname ? Props.parentClassname : ""}`} style={Props.parentStyle}>
                {Props.children}
            </div>
        </>
    )
}

export const Flexwithgapcstmdivrow:React.FC<FlexwithgapcstmdivProps> = (Props) => {

    return(
        <>
            <div className={`flexwithgapcstmrow ${Props.parentClassname ? Props.parentClassname : ""}`} style={Props.parentStyle}>
                {Props.children}
            </div>
        </>
    )
}


export const Whatsappbutton = () => {

    return(

        <>
            <a href="https://wa.me/9400260187" target="_blank" rel="noopener noreferrer" ></a>
        </>
    )
}