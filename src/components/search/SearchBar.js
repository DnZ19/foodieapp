import React, { useState } from 'react';
import styles from './SearchBar.module.css';
// import {useNavigate} from 'react-router-dom';


// Added state variable location to App.js
// Passed state-setter-function as callback prop to SearchBar in App.js

function SearchBar({ setQueryHandler }) {
    const [query, setQuery] = useState('');
    // const navigate = useNavigate();

    function onFormSubmit(e) {
        e.preventDefault();
        // navigate("/searched" + query);
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
                placeholder="What do you want to eat?"
                className={styles["searchBar"]}
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;