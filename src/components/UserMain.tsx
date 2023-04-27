
import UserMainProfile from "./UserMainProfile.tsx";
import UserMainStats from "./UserMainStats.tsx";
import {profileInterface} from "../interfaces/profileInterface.tsx";
import UserMainLinks from "./UserMainLinks.tsx";
import UserLeft from "./UserLeft.tsx";
const UserMain = ({profileData}:profileInterface) => {

    return(
        <div>
            <UserLeft profileData={profileData}/>
            <div>
                <UserMainProfile profileData={profileData}/>
                <UserMainStats profileData={profileData}/>
                <UserMainLinks profileData={profileData}/>
            </div>
        </div>
    )
}

export default UserMain