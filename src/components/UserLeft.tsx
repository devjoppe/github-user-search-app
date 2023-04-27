import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserLeft = ({profileData}:profileInterface) => {
    return(
        <div>
            <img alt={profileData.name} src={profileData.avatar_url} />
        </div>
    )
}

export default UserLeft