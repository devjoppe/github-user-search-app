
import UserMainProfile from "./UserMainProfile.tsx";
import UserMainStats from "./UserMainStats.tsx";
import {profileInterface} from "../interfaces/profileInterface.tsx";
import UserMainLinks from "./UserMainLinks.tsx";
import UserLeft from "./UserLeft.tsx";
const UserMain = ({profileData}:profileInterface) => {
    return(
        <>
            <div className="main-profile-top">
                <UserLeft profileData={profileData}/>
                <UserMainProfile profileData={profileData}/>
            </div>
            <div className="main-profile-bottom">
                <div className="main-profile-bio">
                    <p>{profileData.bio}</p>
                </div>
                <UserMainStats profileData={profileData}/>
                <UserMainLinks profileData={profileData}/>
            </div>
        </>
    )
}

export default UserMain