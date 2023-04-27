import Search from "../components/Search.tsx"
import GitHubUser from "../api/api.tsx";
import {useState} from "react";

// Type for header props.
interface headerProps {
    searchResult: (data:object ) => void,
    onToggleTheme: () => void
}
const Header = ({searchResult, onToggleTheme}:headerProps) => {

    const handleSearch = async (query:string) => {
        try {
            const userData = await GitHubUser(query)
            console.log("Search query in header: ", userData.login)
            searchResult(userData)
        } catch (error) {
            console.log(error)
        }
    }

    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        onToggleTheme()
    }

    console.log("Header Theme: ", theme)

    return(
        <div>
            <p>header</p>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Search onSearch={handleSearch} />
        </div>
    )
}

export default Header