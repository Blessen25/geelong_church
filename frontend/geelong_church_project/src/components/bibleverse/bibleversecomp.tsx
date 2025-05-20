import React from "react";
import './bibleverse.css';
import { Containercstm, ContainerWidthCstm, TitleinMaindiv } from "../extra";

export const BibleVerseComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Bible Verse"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <BibleVersetoStarttheDay />
                    <BibleVersePositivity />
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}


export const BibleVersetoStarttheDay = () => {

    return(
        
        <>
            <h1 className="text_cstm_big_heading">Bible Verses To Start The Day</h1>
            <h1 className="text_cstm_medium_heading">Psalm 118:24</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“This is the day the Lord has made; We will rejoice and be glad in it.”</p>
            <h1 className="text_cstm_medium_heading">Romans 15:13</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“Now may the God of hope fill you with all joy and peace in believing, that you may abound in hope by the power of the Holy Spirit.”</p>
            <h1 className="text_cstm_medium_heading">Psalm 30:5</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“For His anger is but for a moment, His favor is for life; Weeping may endure for a night, But joy comes in the morning.”</p>
            <h1 className="text_cstm_medium_heading">Isaiah 12:2</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“Behold, God is my salvation, I will trust and not be afraid; ‘For Yah, the Lord, is my strength and song; He also has become my salvation.'”</p>
            <h1 className="text_cstm_medium_heading">Isaiah 41:10</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand.”</p>
            <h1 className="text_cstm_medium_heading">Psalm 118:14</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“The Lord is my strength and song, And He has become my salvation.”</p>
            <h1 className="text_cstm_medium_heading">Colossians 3:16</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“Let the word of Christ dwell in you richly in all wisdom, teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.”</p>


        </>
    )
}

export const BibleVersePositivity = () => {

    return(
        
        <>
            <h1 className="text_cstm_big_heading">Bible Verses For Positivity</h1>
            <h1 className="text_cstm_medium_heading">Peter 1:8</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy.”</p>
            <h1 className="text_cstm_medium_heading">Corinthians 5:7</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“For we live by faith, not by sight. ”</p>
            <h1 className="text_cstm_medium_heading">Ephesians 5:20</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“Always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.”</p>
            <h1 className="text_cstm_medium_heading">Galatians 5:22</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.”</p>
            <h1 className="text_cstm_medium_heading">James 1:2</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds.”</p>
            <h1 className="text_cstm_medium_heading">John 15:11</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“I have told you this so that my joy may be in you and that your joy may be complete.”</p>
            <h1 className="text_cstm_medium_heading">Matthew 6:33</h1>
            <p className="text_cstm_normal_para textalign_cstmjustify">“But seek first his kingdom and his righteousness, and all these things will be given to you as well.”</p>


        </>
    )
}