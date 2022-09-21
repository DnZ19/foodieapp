import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ setQueryHandler, placeholder }) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');
        setQueryHandler(query);
        setQuery("");

    }


    return (
        <form
            className={styles["searchBar"]}
            onSubmit={onFormSubmit}
        >

                <input
                    type="text"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className={styles["searchBar"]}
                />

                <button
                    type="submit"
                    className={styles["search-button"]}
                >
                    Search
                </button>




        </form>
    );
}

export default SearchBar;