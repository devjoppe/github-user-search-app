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
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleInput} placeholder="User name"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search