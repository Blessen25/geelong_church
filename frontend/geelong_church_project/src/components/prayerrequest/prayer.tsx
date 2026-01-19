import { Containercstm, ContainerWidthCstm, TitleinMaindiv } from '../extra';
import './prayer.css';
const PrayerRequest = () => {

    return(

        <>
            <TitleinMaindiv title="Prayer Request" initialtitle= "Home"/>
            <Containercstm>
                <ContainerWidthCstm children={<>
                        <h1 className='text_cstm_big_heading'>We’re so glad you are here.</h1>
                        <p className="text_cstm_normal_para">Please take a moment to fill this out so we can serve and pray for you.</p>
                    </>} />
            </Containercstm>
        </>
    )
}

export default PrayerRequest;