import './planyourvisit.css';
import { Containercstm, ContainerWidthCstm, TitleinMaindiv } from "../extra";
import { PlanYourVisitdiv } from "../contact_us/contact";

export const PlanYourVisitComp = () => {

    return(

        <>
            <TitleinMaindiv title={"Plan Your Visit"} initialtitle={"Home"} />
            <Containercstm>
                <ContainerWidthCstm>
                    <PlanYourVisitdiv />
                </ContainerWidthCstm>
            </Containercstm>
        </>
    )
}