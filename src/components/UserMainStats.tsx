import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserMainStats = ({profileData}:profileInterface) => {
    return(
        <div>
            <span>Repos</span>
            <span>{profileData.public_repos}</span>
            <span>Followers</span>
            <span>{profileData.followers}</span>
            <span>Following</span>
            <span>{profileData.following}</span>
        </div>
    )
}

export default UserMainStats