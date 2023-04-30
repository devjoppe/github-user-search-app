import Header from "./sections/Header.tsx"
import Main from "./sections/Main.tsx"
import {useState} from "react";

function App() {

    const [userData, setUserData] = useState({})
    const [theme, setTheme] = useState('light')

    const userResult = (result:object) => {
        setUserData(result)
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="wrapper" data-theme={theme}>
            <div className="container">
                <Header searchResult={userResult} onToggleTheme={toggleTheme}/>
                <Main profileData={userData} />
            </div>
        </div>
    )
}

export default App
