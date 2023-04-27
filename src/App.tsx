import Header from "./sections/Header.tsx"
import Main from "./sections/Main.tsx"
import {useState} from "react";

function App() {

    const [userData, setUserData] = useState({})

    const userResult = (result:object) => {
        setUserData(result)
    }

    console.log("User data from App: ", userData)

    return (
        <div className="wrapper">
            <Header searchResult={userResult} />
            <Main profileData={userData}/>
        </div>
    )
}

export default App
