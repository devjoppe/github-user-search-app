import {useState, ChangeEvent, FormEvent} from "react";

interface onSearchProps {
    onSearch: (data:string) => void,
    noResult: string
}

const Search = ({onSearch, noResult}:onSearchProps) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSearch(searchQuery)
        setSearchQuery('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="search-field">
                <img src="./icons/icon-search.svg" alt="Search icon" />
                <input type="text" value={searchQuery} onChange={handleInput} placeholder="Search GitHub user name" required />
                {noResult ? <span className="no-result">{noResult}</span> : '' }
                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default Search