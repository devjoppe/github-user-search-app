import GitHubUser from "./api/api.tsx";
import Header from "./sections/Header.tsx";

function App() {

    const userData = GitHubUser()
    console.log(userData)

    return (
      <div className="wrapper">
        <Header />
      </div>
    )
}

export default App
