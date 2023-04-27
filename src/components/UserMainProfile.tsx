import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserMainProfile = ({profileData}:profileInterface) => {
    return(
        <div>
            <h2>{profileData.name}</h2>
            <span>{profileData.login}</span>
            <p>{profileData.bio}</p>
            <div>
                <span>{profileData.created_at}</span>
            </div>
        </div>
    )
}

export default UserMainProfile