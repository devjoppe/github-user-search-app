
import UserMainProfile from "./UserMainProfile.tsx";
import {profileInterface} from "../interfaces/profileInterface.tsx";
const UserMain = ({profileData}:profileInterface) => {

    return(
        <div>
            <p>userMain</p>
            <UserMainProfile profileData={profileData}/>
        </div>
    )
}

export default UserMain