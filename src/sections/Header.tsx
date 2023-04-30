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
            if(userData[0] === 'No result') {
                setCheckStatus(userData)
                return
            }
            setCheckStatus('')
            searchResult(userData)
        } catch (error) {
            console.log(error)
        }
    }, [searchResult])

    useEffect(() => {
        handleSearch('devjoppe').then(() => {
            console.info("User found")
        })
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        setThemeIcon(themeIcon === 'sun' ? 'moon' : 'sun')
        onToggleTheme()
    }

    return(
        <div className="header-content">
            <div className="header-title-theme">
                <h1>devfinder</h1>
                <div onClick={toggleTheme} className="choose-theme">
                    { theme === 'light' && (<>dark</>) }
                    { theme === 'dark' && (<>light</>) }
                    <img src={`./icons/icon-${themeIcon}.svg`} alt="icon" />
                </div>
            </div>
            <Search onSearch={handleSearch} noResult={checkStatus}/>
        </div>
    )
}

export default Header