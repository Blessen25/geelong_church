import { Containercstm, ContainerWidthCstm, TitleinMaindiv } from '../extra';
import './meetings.css';

const Meetings_Component = () => {

    return(

        <>
            <TitleinMaindiv title="Meeting Request" initialtitle= "Home"/>
            <Containercstm>
                <ContainerWidthCstm children={
                    <>
                        <h1>Undergoing Development</h1>
                    </>
                }/>
            </Containercstm>
        </>
    )
}

export default Meetings_Component;