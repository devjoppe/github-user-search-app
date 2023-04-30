import {profileInterface} from "../interfaces/profileInterface.tsx";
import {useEffect, useState} from "react";

const UserMainProfile = ({profileData}:profileInterface) => {

    const [joinedDate, setJoinedDate] = useState('')

    useEffect(() => {
        if(profileData.created_at) {
            const date = new Date(profileData.created_at)
            const day = date.getUTCDay()
            const month = new Intl.DateTimeFormat("en-US", {month: "short"}).format(date)
            const year = date.getUTCFullYear()
            setJoinedDate(`${day} ${month} ${year}`)
        }
    }, [profileData.created_at])

    return(
        <div className="main-profile-top-content">
            <div className="login">
                <h2>{profileData.name}</h2>
                <a href={profileData.html_url} target="_blank">
                    <span className="login">@{profileData.login}</span>
                </a>
            </div>
            <span>Joined {joinedDate}</span>
        </div>
    )
}

export default UserMainProfile