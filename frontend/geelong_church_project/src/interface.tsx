
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