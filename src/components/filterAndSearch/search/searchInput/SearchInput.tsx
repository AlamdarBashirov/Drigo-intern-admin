import { useState } from 'react'
import styles from './SearchInput.module.scss'

type SearchInputProps = {
    search: string,
    placeholder?: string
    setSearch: (newSearch: string) => void
}
const SearchInput = ({ search, placeholder, setSearch }: SearchInputProps) => {

    // const [newSearchText, setNewSearchText] = useState("")
    return (
        <>
            <div className={styles.searchContainer}>
                <input type="text"
                    placeholder={placeholder || "search"}
                    className={styles.searchInput}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </>
    )
}

export default SearchInput