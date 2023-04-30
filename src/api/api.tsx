import axios from "axios";

const GitHubUser = async (query:string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching results:', error);
        return ['No result'];
    }
}

export default GitHubUser