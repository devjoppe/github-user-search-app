import axios from "axios";

const GitHubUser = async (query:string) => {
    try {
        console.log(query)
        const response = await axios.get(`https://api.github.com/users/${query}`);
        console.log("API: ", response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching results:', error);
        return [];
    }
}

export default GitHubUser