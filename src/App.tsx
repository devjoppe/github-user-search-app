import Header from "./sections/Header.tsx"
import {useState} from "react";

function App() {

    const [userData, setUserData] = useState({})

    const userResult = (result) => {
        setUserData(result)
    }

    console.log("User data from App: ", userData)

    return (
      <div className="wrapper">
        <Header searchResult={userResult} />
      </div>
    )
}

export default App
