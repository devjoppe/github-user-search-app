
import UserMainProfile from "./UserMainProfile.tsx";
import UserMainStats from "./UserMainStats.tsx";
import {profileInterface} from "../interfaces/profileInterface.tsx";
import UserMainLinks from "./UserMainLinks.tsx";
import UserLeft from "./UserLeft.tsx";
import {useEffect, useState} from "react";

const UserMain = ({profileData}:profileInterface) => {

    // Check and set screen size
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleSize = () => {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', handleSize)
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, [])

    return(
        <>
            <div className="main-profile-top">
                <UserLeft profileData={profileData}/>
                <div className="main-profile-data">
                    <UserMainProfile profileData={profileData}/>
                    <p className="desktop-bio-text">{ profileData.bio ? screenSize > 1280 && profileData.bio : screenSize > 1280 && 'This profile has no bio'}</p>
                </div>
            </div>
            <div className="main-profile-bottom">
                <div className="left-pane"></div>
                <div className="right-pane">
                    <div className="main-profile-bio">
                        <p>{ profileData.bio ? screenSize < 1280 && profileData.bio : 'This profile has no bio'}</p>
                    </div>
                    <UserMainStats profileData={profileData}/>
                    <UserMainLinks profileData={profileData}/>
                </div>
            </div>
        </>
    )
}

export default UserMain