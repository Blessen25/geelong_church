import React, { useState } from "react";
import './extra.css';
import { ButtonwithtextComponentProps, ContainerdivProps, FlexwithgapcstmdivProps, flexwithiconandtextdivProps, FlexwithiconandtextparentdivProps, FlexwithtextandimagedivProps, PopupdivProps, PopupModalProps, TitleinMaindivProps } from "../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose, faInfo, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Containerdiv:React.FC<ContainerdivProps> = (Props) => {

    return(

        <>
            <div className={`containercstm ${Props.styles ? Props.styles : ''}`}>
                {Props.children}
            </div>
        </>
    )
}

export const Paddingtopdivhome:React.FC<ContainerdivProps> = (Props) => {
    return(
        <>
            <div className={`paddingcstmhomediv ${Props.styles ? Props.styles : ''}`}>
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

    const [whatsappvisible, setWhatsappVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const HandleWhatsappButtTrue = () => {
        setWhatsappVisible(true);
        setIsClosing(false);
    }

    const HandleWhatsappButtClose = () => {

        setIsClosing(true);
        setTimeout(() => {

            setWhatsappVisible(false);
        },700);
    }
    
    const currentTime = new Date().toLocaleTimeString([], {
        hour : '2-digit',
        minute : '2-digit',
    });
    return(

        <>
        {whatsappvisible && (
            <>
                <div className={`cstmwhatsapppopup ${isClosing ? 'closinganimation' : ''}`}>
                    <div className="whatsappnameandclosebutton">
                        <div className="whatsappnamecstm">
                            <p className="text_cstm_normal_para">Geelong Pentecostal Assembly</p>
                            <p className="onlineorofflinetag">Typically replies within a day</p>
                        </div>
                        <FontAwesomeIcon icon={faClose} className="closebuttwhatsapp" onClick={HandleWhatsappButtClose}/>
                    </div>
                    <div className="whatsappbodydiv" style={{  backgroundImage: 'url("/assets/images/whatsapp/whatsapp_pattern.jpg")'  }}>
                        <div className="whatsapp_bubble">
                            <p>Hi there 👋</p>
                            <p>How can I help you?</p>
                            <span className="whatsapp_time">{currentTime}</span>
                        </div>
                        <a className="chat_whatsapp" href="https://wa.me/61494357534" target="_blank" rel="noopener noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                            <p>Chat on Whatsapp</p>
                        </a>
                    </div>
                </div>
            </>
        )}
        <a className="whatsappbuttoncstm" onClick={HandleWhatsappButtTrue}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#25D366"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        </>
    )
}

export const Popupdiv:React.FC<PopupdivProps> = (Props) => {

    return(

        <>
            <div className="popupdivparent">
                <div className="dflexcstm justifycontentendcstm">
                    <FontAwesomeIcon icon={faClose} className="popupcloseicon" onClick={Props.onClickprop}/>
                </div>
                <h1 className="text_cstm_big_heading textalign_cstmcenter">{Props.title}</h1>
                {Props.children ? (
                    <>
                        {Props.children}
                    </>
                ) :
                
                <>
                    <div className="popupdivchild">
                        <h1 className="text_cstm_medium_heading textalign_cstmcenter" style={{ color:"#8b8b8b"}}>No Upcoming Events</h1>
                    </div>
                </>}
            </div>  
        </>
    )
}

export const PopupModal:React.FC<PopupModalProps> = (Props) => {

    return(

        <>
        {Props.isOpen && (
            <>
                <div className="outlaypopup"></div>
                <div className="popupmodal">
                    <div className="icondiv">
                        <div className="rounddivicon">
                            {Props.variant === "success" && <FontAwesomeIcon icon={faCheck} className="successicon text_cstm_big_heading"/>}
                            {Props.variant === "error" && <FontAwesomeIcon icon={faXmark} className="erroricon text_cstm_big_heading"/>}
                            {Props.variant === "info" && <FontAwesomeIcon icon={faInfo} className="infoicon text_cstm_big_heading"/>}
                        </div>
                    </div>
                    <div className="detailsdiv">
                        <p className="text_cstm_normal_para" style={{textAlign : 'center'}}>{Props.modalSubtitle}</p>
                    </div>
                    <div className="buttondiv">
                        {Props.primaryButtonText && <ButtonwithtextComponentColor route="/" label={Props.primaryButtonText} classname="" fullwidth={false}/>}
                        {Props.secondaryButtonText && <ButtonwithtextComponent route={Props.secondaryButtonRoute ? Props.secondaryButtonRoute : "#"} label={Props.secondaryButtonText} classname="" fullwidth={false}/>}
                    </div>
                </div>
            </>
            )  
        } 
        </>
    )
}