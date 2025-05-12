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

}

export interface TitleinMaindivProps {

    title : string;
    initialtitle : string;
}

export interface ContainerdivProps {

    children : React.ReactNode;
}

export interface flexwithiconandtextdivProps {

    icon: IconDefinition ;
    textPara : string;
    titleName : string;
}

export interface FlexwithiconandtextparentdivProps {

    items: flexwithiconandtextdivProps[];
}