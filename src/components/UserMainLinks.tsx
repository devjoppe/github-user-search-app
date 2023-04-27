import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserMainLinks = ({profileData}:profileInterface) => {
    return(
        <div>
            <p>User links</p>
            <span>{profileData.location}</span>
            <span>{profileData.blog}</span>
            <span>{profileData.twitter_username}</span>
            <span>{profileData.company}</span>
        </div>
    )
}

export default UserMainLinks