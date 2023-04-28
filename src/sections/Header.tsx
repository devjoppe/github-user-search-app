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

    const [themeIcon, setThemeIcon] = useState('moon')
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        setThemeIcon(themeIcon === 'sun' ? 'moon' : 'sun')
        onToggleTheme()
    }

    console.log("Header Theme: ", theme)

    return(
        <div>
            <div className="header-title-theme">
                <h1>devfinder</h1>
                <div onClick={toggleTheme} className="choose-theme">
                    { theme === 'light' && (<>dark</>) }
                    { theme === 'dark' && (<>light</>) }
                    <img src={`src/assets/icons/icon-${themeIcon}.svg`} alt="icon" />
                </div>
            </div>
            <Search onSearch={handleSearch} />
        </div>
    )
}

export default Header