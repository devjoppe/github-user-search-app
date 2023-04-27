import {useState, useEffect} from "react";
import axios from "axios";

const GitHubUser = () => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try{
              const response = await axios.get('https://api.github.com/users/octocat')
              setUserData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData()
    }, [])
    return userData
}

export default GitHubUser