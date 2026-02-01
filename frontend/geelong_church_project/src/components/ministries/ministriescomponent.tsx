import React from "react";
import './ministries.css';
import { ButtonwithtextComponent, ButtonwithtextComponentColor, Containercstm, ContainerWidthCstm, Flexwithgapcstmdivrow, TitleinMaindiv } from "../extra";
import { MinistriesFlexComponentProps } from "../../interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

export const MinistriesComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Ministries"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <MinsitriesIntroPart />
                    <MinistriesFlexComponent title={"Outreach Ministries"} para={"At Geelong Pentecostal Assembly, our Outreach Ministries serve as the hands and feet of Jesus, reaching out to those in need with compassion, dignity, and hope. We believe the church is called not only to gather in worship but also to go out and serve, reflecting Christ’s love in practical and life-changing ways.Our mission is to extend God's love beyond the walls of the church into neighborhoods, workplaces, city streets, and homes. We actively engage with the community through food distribution, clothing drives, home visits, and practical assistance for families in crisis. Whether it's supporting the homeless, visiting the elderly, helping single parents, or simply lending a listening ear, we strive to meet both spiritual and physical needs."} imageone={"assets/images/ministries/outreachpictwo.webp"} imagetwo={"assets/images/ministries/outreachpicone.webp"} />
                    <MinistriesFlexComponent title={"Youth Ministry"} para={"At Geelong Pentecostal Assembly, our Youth Ministry is more than just a weekly gathering it's a vibrant, Christ-centered community where young people are equipped to grow spiritually, emotionally, and socially. We are passionate about raising up a generation that loves Jesus deeply, lives with purpose, and leads with integrity in today’s world.We believe that youth are not just the church of tomorrow they are the church of today. Through regular gatherings, interactive Bible studies, worship nights, and fun-filled events, our teens are given a safe and welcoming space to explore their faith, ask tough questions, and build lasting friendships. Whether it's through small groups, games, discussions, or service opportunities, everything we do is centered on helping youth experience the love of God personally."} imageone={"assets/images/ministries/youthministryone.webp"} imagetwo={"assets/images/ministries/youthministrytwo.webp"} reverseclass={true}/>
                    <MinistriesFlexComponent title={"Intercessory Prayer"} para={"At Geelong Pentecostal Assembly, we believe that prayer is not just a spiritual discipline it's the very heartbeat of our church. Our Intercessory Prayer Ministry is a dedicated team of prayer warriors who passionately stand in the gap for individuals, families, our church community, the nation, and the world. Rooted in faith and compassion, they commit to lifting up the needs of others before God with persistence and love. Whether gathered in person at the church altar or connecting virtually across distances, we unite in one spirit to seek God's will, intercede for healing, and call down breakthroughs and spiritual revival. Our team prays over the sick, the struggling, the lost, and the leaders of our communities and nations, believing that fervent, united prayer can change situations, restore hope, and release God's power."} imageone={"assets/images/ministries/Intercessorytwo.webp"} imagetwo={"assets/images/ministries/Intercessoryone.webp"} />
                    <MinistriesFlexComponent title={"Kids Ministry"} para={"At Geelong Pentecostal Assembly, we believe that children are not just the future of the Church they are a vital part of it today. Every child is a precious gift from God, uniquely created with purpose, and fully capable of experiencing a deep, personal relationship with Jesus. Our Kids Ministry provides a safe, nurturing, and joy-filled environment where children can grow in their faith, explore biblical truths, and develop a genuine love for God. Through fun, interactive, and age-appropriate Bible lessons, spirit-filled worship, creative storytelling, crafts, games, and group activities, we aim to build strong spiritual foundations that last a lifetime. We are passionate about helping kids discover that church is a place where they belong, where they are loved and valued, and where their faith can flourish."} imageone={"assets/images/ministries/kidsone.webp"} imagetwo={"assets/images/ministries/kidstwo.webp"} reverseclass={true}/>
                    <MinistriesFlexComponent title={"Men’s Fellowship"} para={"At Geelong Pentecostal Assembly, our Men’s Fellowship is a powerful space where men come together to grow in faith, character, and brotherhood. We believe that when men are spiritually strong, families flourish, communities thrive, and the Church becomes even more effective in its mission. This ministry is designed to equip men to live out their faith boldly in every area of life at home, in the workplace, and within the church. Through regular meet-ups, prayer gatherings, Bible studies, workshops, and outdoor activities, men are encouraged to lead with integrity, love with strength, and serve with humility. Whether you're a father, husband, single adult, or senior, Men’s Fellowship offers mentorship, accountability, and support in navigating life’s challenges and responsibilities. It’s more than just a gathering it’s a brotherhood where men sharpen one another, inspire one another, and stand firm together in the Lord."} imageone={"assets/images//ministries/menone.webp"} imagetwo={"assets/images/ministries/mentwo.webp"} />
                    <MinistriesFlexComponent title={"Ladies Meeting"} para={"At Geelong Pentecostal Assembly, our Ladies Ministry is a vibrant community where women of all ages and walks of life come together to grow spiritually, build meaningful relationships, and walk confidently in their God-given calling. It’s a space of encouragement, healing, and transformation where every woman is welcomed, valued, and empowered. Our ministry encourages women to rise in leadership, serve their families and communities with love and purpose, and boldly live out their faith in everyday life. We believe that as women are spiritually equipped, they bring life and strength not only to their homes and churches, but also to the broader world around them. Through regular gatherings, Bible studies, prayer sessions, workshops, and women’s conferences, we provide opportunities for women to deepen their faith, find their voice, and support one another through life’s seasons."} imageone={"assets/images/ministries/womantwo.webp"} imagetwo={"assets/images/ministries/womanone.webp"} reverseclass={true}/>
                    <MinistriesFlexComponent title={"Morning Prayer"} para={"Morning Prayer is the spiritual engine room of Geelong Pentecostal Assembly. Every morning, we come together whether in person or online to begin the day in the presence of God, seeking His face, His guidance, and His power for all that lies ahead. These early hours are a sacred time of worship We pray over our families, our church, our city, and our nation, believing that breakthrough begins with prayer. It’s not just a routine it’s a daily invitation to draw near to God, align our hearts with His will, and walk in step with the Holy Spirit. Morning Prayer is open to all whether you’re a student, parent, professional, or senior citizen. There’s something powerful about starting the day as a united body of believers, lifting up praises and petitions, and declaring God’s promises over every situation."} imageone={"assets/images/ministries/morningtwo.webp"} imagetwo={"assets/images/ministries/morningone.webp"} />
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}

export const MinistriesFlexComponent:React.FC<MinistriesFlexComponentProps> = (Props) => {

    return(

        <>
        <div className={`ministriesfirstdiv ${Props.reverseclass ? 'flexdirectionreversecstm' : ''}`}>
            <div className="ministriesflexchilddiv">
                <h1 className="text_cstm_big_heading">{Props.title}</h1>
                <p className="textalign_cstmjustify text_cstm_normal_para">{Props.para}</p>
            </div>
            <div className="ministriesflexchilddivimage">
                <img src={Props.imageone} alt="Image" className="ministriesimage" loading="lazy"/>
                <img src={Props.imagetwo} alt="Image" className="ministriesimage" loading="lazy"/>
            </div>
        </div>
        {/* <div className="buttondivministries">
         <ButtonwithtextComponentColor label="Visit Page" route={`${Props.route ? Props.route : '#'}`} fullwidth={false} />
        </div> */}
        </>
    )

}


export const MinsitriesIntroPart = () => {

    return(

        <>
            <p className="textalign_cstmjustify text_cstm_normal_para">At Geelong Pentecostal Assembly, ministries are the heartbeat of our church, providing meaningful opportunities for individuals and families to grow in faith, serve with purpose, and build Christ-centered relationships. We believe that church is not just a place we attend, but a community we belong to a body where every member has a role to play and a gift to offer. Our ministries are designed to meet people where they are, encourage spiritual growth, and empower believers to live out their faith in real, practical ways. Whether you are young or old, new to faith or spiritually seasoned, there is a place for you to connect, serve, and thrive.</p>
            <p className="textalign_cstmjustify text_cstm_normal_para">Below are the ministries currently active in our church:</p>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                <p className="textalign_cstmjustify text_cstm_normal_para">Outreach Ministries</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                <p className="textalign_cstmjustify text_cstm_normal_para">Youth Ministry</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                <p className="textalign_cstmjustify text_cstm_normal_para">Intercessory Prayer</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                <p className="textalign_cstmjustify text_cstm_normal_para">Kids Ministry</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                <p className="textalign_cstmjustify text_cstm_normal_para">Men’s Fellowship</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                <p className="textalign_cstmjustify text_cstm_normal_para">Ladies Meeting</p>
            </Flexwithgapcstmdivrow>
            <Flexwithgapcstmdivrow parentStyle={{ alignItems:"center"}}>
                <FontAwesomeIcon icon={faCheckSquare} color="#3c79b0" className="fachecksquareiconcstm"/>
                <p className="textalign_cstmjustify text_cstm_normal_para">Morning Prayer</p>
            </Flexwithgapcstmdivrow>
        </>
    )
}