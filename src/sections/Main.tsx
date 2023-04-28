import UserMain from "../components/UserMain.tsx";
import {profileInterface} from "../interfaces/profileInterface.tsx";

const Main = ({profileData}:profileInterface) => {
    return(
        <div className="main-content">
            <UserMain profileData={profileData}/>
        </div>
    )
}

export default Main