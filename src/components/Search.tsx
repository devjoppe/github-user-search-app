import {useState, ChangeEvent, FormEvent} from "react";

interface onSearchProps {
    onSearch: (data:string) => void
}

const Search = ({onSearch}:onSearchProps) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(searchQuery)
        console.log("Form submit", searchQuery)
        setSearchQuery('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="search-field">
                <img src="src/assets/icons/icon-search.svg" alt="Search icon" />
                <input type="text" value={searchQuery} onChange={handleInput} placeholder="Search GitHub user name" required />
                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default Search