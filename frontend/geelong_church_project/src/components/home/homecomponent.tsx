import React from "react";
import './homecomponent.css';
import { ButtonwithtextComponent, ButtonwithtextComponentColor, Containerdiv } from "../extra";

const HomeComponent = () => {

    return (
        <>
            <Containerdiv children={
                <>
                    <div className="mainhome">
                        <div className="imagecstmdivhome">
                            <img src="../assets/images/main/handraising.jpg" alt="Workship" className="imageonecstm"/>
                            <div className="textdivcstmhome">
                                <h1>Welcome To <br /> Geelong Pentecostal Assembly <br /></h1>
                                <p> A Place to Grow in Faith & Community </p>
                                <ButtonwithtextComponentColor label={"Connect With Us"} fullwidth={false} route="#" classname="connectwithuscstm"/>
                            </div>
                        </div>
                        
                    </div>
                </>
            }/>
        </>
    )
}

export default HomeComponent;