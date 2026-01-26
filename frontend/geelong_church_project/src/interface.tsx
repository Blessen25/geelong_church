import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export interface ContainerdivProps {

    children : React.ReactNode;
    styles ?: React.CSSProperties;
}

export interface ButtonwithtextComponentProps {

    label : string;
    fullwidth : boolean;
    route ?: string;
    classname? : string;
}

export interface FlexwithtextandimagedivProps {

    parentclassName ?: string;
    childtextclassName ?: string;
    childimageclassName ?:string;
}

export interface HomeFourDivChildCompProps {

    text : string;
    image : string;
    route ?: string;
    onClick ?: () => void;

}

export interface HomeFourDivsProps {
  onClickForUpcomingEvents: () => void;
}

export interface TitleinMaindivProps {

    title : string;
    initialtitle : string;
}

export interface ContainerdivProps {

    children : React.ReactNode;
    parentStyle?: React.CSSProperties;
    parentClassName ?: string;
}

export interface flexwithiconandtextdivProps {

    icon: IconDefinition ;
    textPara : string;
    titleName ?: string;
}

export interface FlexwithiconandtextparentdivProps {

    items: flexwithiconandtextdivProps[];
}

export interface FlexwithgapcstmdivProps {

    children : React.ReactNode;
    parentClassname ?: string;
    parentStyle ?: React.CSSProperties;
}

export interface ContactcardDetailsdivProps {

    Icon : IconDefinition;
    title ?: string;
    text ?: string;
    ahref ?: string;
    extracardClass ?: string;
}

export interface MinistriesFlexComponentProps {

    title : string;
    para : string;
    imageone : string;
    imagetwo : string;
    route ?: string;
    reverseclass ?: boolean;
}


export interface PopupdivProps {

    title : string;
    onClickprop ?: () => void;
    children ?: React.ReactNode;
    eventName ?: string;
    date ?: string;
}

export interface Event {
  id: number;
  event_name: string;
  event_date: string; // Use string since DateField serializes to YYYY-MM-DD
  created_at: string;
  is_deleted: boolean;
  deleted_at: string | null;
}

export interface PhoneNumberFieldProps {
    value: string;
    onChange : (phone: string, country: any) => void;
}

export interface PopupModalProps {

    isOpen ?: boolean;
    onClose ?: () => void;
    modalTitle ?: string;
    modalSubtitle ?: string;
    variant ?: "success" | "error" | "info";
    primaryButtonText ?: string;
    showCloseButton ?: boolean;
    children ?: React.ReactNode;
}   

