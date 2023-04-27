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

    console.log("Theme:", theme)
    console.log("User data from App: ", userData)

    return (
        <div className="wrapper" data-theme={theme}>
            <Header searchResult={userResult} onToggleTheme={toggleTheme}/>
            <Main profileData={userData} />
        </div>
    )
}

export default App
