import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserMainLinks = ({profileData}:profileInterface) => {
    return(
        <div className="main-profile-links">
            <div>
                <img src="src/assets/icons/icon-location.svg" alt="Location" />
                <span>{(profileData.location ? profileData.location : 'Not available')}</span>
            </div>
            <div>
                <img src="src/assets/icons/icon-website.svg" alt="Location" />
                <span>{(profileData.blog ? profileData.blog : 'Not available')}</span>
            </div>
            <div>
                <img src="src/assets/icons/icon-twitter.svg" alt="Location" />
                <span>{(profileData.twitter_username ? profileData.twitter_username : 'Not available')}</span>
            </div>
            <div>
                <img src="src/assets/icons/icon-company.svg" alt="Location" />
                <span>{(profileData.company ? profileData.company : 'Not available')}</span>
            </div>
        </div>
    )
}

export default UserMainLinks