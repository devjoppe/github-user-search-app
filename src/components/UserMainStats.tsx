import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserMainStats = ({profileData}:profileInterface) => {
    return(
        <div className="main-profile-stats">
            <div>
                <span className="title">Repos</span>
                <span className="number">{profileData.public_repos}</span>
            </div>
            <div>
                <span className="title">Followers</span>
                <span className="number">{profileData.followers}</span>
            </div>
            <div>
                <span className="title">Following</span>
                <span className="number">{profileData.following}</span>
            </div>
        </div>
    )
}

export default UserMainStats