import {profileInterface} from "../interfaces/profileInterface.tsx";

const UserMainLinks = ({profileData}:profileInterface) => {

    const urlString = profileData.blog?.replace("https://www.", "")

    return(
        <div className="main-profile-links">
            <div className="links-column">
                <div>
                    {(profileData.location ?
                        <>
                            <img className="isData" src="src/assets/icons/icon-location.svg" alt="Location" />
                            <span className="isData">{profileData.location}</span>
                        </> :
                        <>
                            <img className="none" src="src/assets/icons/icon-location.svg" alt="Location" />
                            <span className="none">Not available</span></>
                    )}
                </div>
                <div>
                    {(profileData.blog ?
                        <>
                            <img className="isData" src="src/assets/icons/icon-website.svg" alt="Location" />
                            <a href={profileData.blog} target="_blank">
                                <span className="isData">{urlString}</span>
                            </a>
                        </> :
                        <>
                            <img className="none" src="src/assets/icons/icon-website.svg" alt="Location" />
                            <span className="none">Not available</span>
                        </>
                    )}
                </div>
            </div>
            <div className="links-column">
                <div>
                    {(profileData.twitter_username ?
                        <>
                            <img className="isData" src="src/assets/icons/icon-twitter.svg" alt="Location" />
                            <span className="isData">{profileData.twitter_username}</span>
                        </> :
                        <>
                            <img className="none" src="src/assets/icons/icon-twitter.svg" alt="Location" />
                            <span className="none">Not available</span>
                        </>
                    )}
                </div>
                <div>
                    {(profileData.company ?
                            <>
                                <img className="isData" src="src/assets/icons/icon-company.svg" alt="Location" />
                                <span className="isData">{profileData.company}</span>
                            </> :
                            <>
                                <img className="none" src="src/assets/icons/icon-company.svg" alt="Location" />
                                <span className="none">Not available</span>
                            </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserMainLinks