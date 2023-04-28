import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserLeft = ({profileData}:profileInterface) => {
    return(
        <div className="avatar">
            <img alt={profileData.name} src={profileData.avatar_url} />
        </div>
    )
}

export default UserLeft