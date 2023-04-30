import Search from "../components/Search.tsx"
import GitHubUser from "../api/api.tsx";
import {useEffect, useState} from "react";
import {useCallback} from "react";

// Type for header props.
interface headerProps {
    searchResult: (data:object ) => void,
    onToggleTheme: () => void
}
const Header = ({searchResult, onToggleTheme}:headerProps) => {

    const [themeIcon, setThemeIcon] = useState('moon')
    const [theme, setTheme] = useState('light')
    const [checkStatus, setCheckStatus] = useState('')

    const handleSearch = useCallback(async (query:string) => {
        try {
            const userData = await GitHubUser(query)
            console.log("Result from API: ", userData)
            if(userData[0] === 'No result') {
                setCheckStatus(userData)
            }
            searchResult(userData)
        } catch (error) {
            console.log(error)
        }
    }, [searchResult])

    useEffect(() => {
        handleSearch('devjoppe').then(() => {
            console.log("Gets first user?")
        })
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        setThemeIcon(themeIcon === 'sun' ? 'moon' : 'sun')
        onToggleTheme()
    }

    console.log("Header Theme: ", theme)

    return(
        <div className="header-content">
            <div className="header-title-theme">
                <h1>devfinder</h1>
                <div onClick={toggleTheme} className="choose-theme">
                    { theme === 'light' && (<>dark</>) }
                    { theme === 'dark' && (<>light</>) }
                    <img src={`src/assets/icons/icon-${themeIcon}.svg`} alt="icon" />
                </div>
            </div>
            <Search onSearch={handleSearch} noResult={checkStatus}/>
        </div>
    )
}

export default Header