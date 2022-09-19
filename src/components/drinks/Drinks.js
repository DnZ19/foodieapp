import React, {useEffect, useState} from "react";
import styles from "../search/Search.module.css"
import axios from "axios";
import SearchBar from "../search/SearchBar";
import CardRecipe from "../search/CardRecipe";
import {Link} from "react-router-dom";


function Drinks() {

    const [query, setQuery] = useState("");
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_FOODIE_API_ID}&app_key=${process.env.REACT_APP_FOODIE_API_KEY}&health=alcohol-cocktail&from=0&to=3`);
                console.log(result.data);
                setDrinks(result.data.hits);

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
                placeholder={"What drink are you looking for?"}
            />


                <span className={styles["recipe-cards-container"]}

                >
                    <article
                        className={styles["recipe-container"]}
                    >

                        {drinks.map((drink) => {
                            return (
                                <Link
                                    to={"/recipe/" + drink["recipe"]["id"]}
                                    className={styles["card-link"]}
                                    key={drink["recipe"]["id"]}
                                >
                                    <CardRecipe
                                        key={drink["recipe"]["id"]}
                                        id={drink["recipe"]["id"]}
                                        image={drink["recipe"].image}
                                        alt={drink["recipe"].label}
                                        title={drink["recipe"].label}
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

        </>
    )
}

export default Drinks