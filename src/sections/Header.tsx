import Search from "../components/Search.tsx"
import GitHubUser from "../api/api.tsx";

// Type for header props.
interface headerProps {
    searchResult: (data:object ) => void
}

const Header = ({searchResult}:headerProps) => {

    const handleSearch = async (query:string) => {
        try {
            const userData = await GitHubUser(query)
            console.log("Search query in header: ", userData)
            searchResult(userData)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <p>header</p>
            <Search onSearch={handleSearch} />
        </div>
    )
}

export default Header