import React, {useEffect, useState} from "react";
import styles from "./Search.module.css";
import axios from "axios";
import SearchBar from "./SearchBar";
import CardRecipe from "./CardRecipe";
import {Link} from "react-router-dom";


function Search() {

    const [searchData, setSearchData] = useState({});
    const [query, setQuery] = useState("steak");

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=3`);
                console.log(result.data);
                setSearchData(result.data);

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
                placeholder={"Enter a desired ingredient..."}
            />

            {Object.keys(searchData).length > 0 &&
                <span className={styles["recipe-cards-container"]}

                >
                    <article
                        className={styles["recipe-container"]}
                    >

                        {searchData.results.map((recipe) => {
                            return (
                                <Link
                                    to={"/recipe/" + recipe.id}
                                    className={styles["card-link"]}
                                    key={recipe.id}
                                >
                                    <CardRecipe
                                        key={recipe.id}
                                        id={recipe.id}
                                        image={recipe.image}
                                        alt={recipe.title}
                                        title={recipe.title}
                                        // description={recipe.summary}
                                        styleCard="card"
                                        styleCardImage="card__image"
                                        styleCardTitle="card__title"
                                        styleCardInfo="card__info"
                                        styleCardButton="cardButtons"
                                    />
                                </Link>
                            )
                        })}
                    </article>
                </span>
            }
        </>
    )
}

export default Search