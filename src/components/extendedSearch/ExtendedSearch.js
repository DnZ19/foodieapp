import React, {useEffect, useState} from "react";
import axios from "axios";
import SearchBar from "../search/SearchBar";
import styles from "./ExtendedSearch.module.css";
import {Link} from "react-router-dom";
import ExtRecipeTile from "./ExtRecipeTile";




function ExtendedSearch ()  {

    const [query, setQuery] = useState("");
    const [extendedSearch, setExtendedSearch] = useState([]);

useEffect(() => {
    async function fetchData() {

        try {
            const result = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_FOODIE_API_ID}&app_key=${process.env.REACT_APP_FOODIE_API_KEY}&from=0&to=8`);
            console.log(result.data);
            setExtendedSearch(result.data.hits);

        } catch (e) {
            console.error(e);
        }
    }

    if (query) {
        fetchData();
    }
}, [query]);

return (
    <>
        <h3>Search</h3>

        <SearchBar
            setQueryHandler={setQuery}
            placeholder={"Type of food"}
        />

        <h1>extended search dropdown</h1>


        <span className={styles["recipe-cards-container"]}


        >
                    <article
                        className={styles["ext-recipe-tile"]}
                    >


                        {extendedSearch.map((search) => {
                            return (
                                <Link
                                    to={"/recipe/" + search["recipe"].label}
                                    className={styles["card-link"]}
                                    key={search["recipe"].label}
                                >

                                    <ExtRecipeTile search={search} />

                                </Link>
                            )
                        })}
                    </article>
                </span>

    </>
)
}

export default ExtendedSearch;