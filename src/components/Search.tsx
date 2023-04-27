const Search = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submit")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="User name"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search