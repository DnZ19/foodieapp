import React, {useEffect, useState} from "react";
import axios from "axios";
import styles from "./ExtendedSearch.module.css";
import {Link} from "react-router-dom";
import ExtRecipeTile from "./ExtRecipeTile";

const onSubmit = (e) =>  {
    e.preventDefault();
    // fetchData();
    ExtendedSearch();

}

function ExtendedSearch ()  {

    const [query, setQuery] = useState("pasta");
    const [recipes, setRecipes] = useState([]);
    const [mealType, setMealType] = useState("dinner");
    const [diet, setDiet] = useState("low-carb");


useEffect(() => {


    async function fetchData() {

        try {
            const result = await axios.get(
                `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_FOODIE_API_ID}&app_key=${process.env.REACT_APP_FOODIE_API_KEY}&diet=${diet}&mealType=${mealType}&from=0&to=8`);


                console.log(result.data);
            setRecipes(result.data.hits);
            console.log(mealType, diet);

        } catch (e) {
            console.error(e);
        }
    };

    if (query)  {
        fetchData();
    }



}, [query]);




return (
    <>
        <h3>Search</h3>

        <form
            className={styles["searchBar"]}
            onSubmit={onSubmit}
        >
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Wanna eat?"
                    className={styles["searchBar-input-section"]}
                />

                <button
                    type="submit"
                    className={styles["search-button"]}
                >
                    Search
                </button>
            </div>


            <select className={styles["mealType-selection"]}>
                <option onClick={() => setMealType("breakfast")}>Breakfast</option>
                <option onClick={() => setMealType("brunch")}>Brunch</option>
                <option onClick={() => setMealType("lunch")}>Lunch</option>
                <option onClick={() => setMealType("dinner")}>Dinner</option>
                <option onClick={() => setMealType("snack")}>Snack</option>
                <option onClick={() => setMealType("teatime")}>Teatime</option>

            </select>

            <select className={styles["diet-selection"]}>
                <option onClick={() => setDiet("balanced")}>Balanced</option>
                <option onClick={() => setDiet("high-fiber")}>High-Fiber</option>
                <option onClick={() => setDiet("high-protein")}>High-Protein</option>
                <option onClick={() => setDiet("low-carb")}>Low-Carb</option>
                <option onClick={() => setDiet("low-fat")}>Low-Fat</option>
                <option onClick={() => setDiet("low-sodium")}>Low-Sodium</option>

            </select>



        </form>
                    <article
                        className={styles["ext-recipe-tile-container"]}
                    >

                        {recipes.map((recipe) => {
                            return (
                                <Link
                                    to={"/recipe/" + recipe["recipe"].label}
                                    className={styles["card-link"]}
                                    key={recipe["recipe"].label}
                                >

                                    <ExtRecipeTile recipe={recipe} />



                                </Link>
                            )
                        })}
                    </article>


    </>
)
}

export default ExtendedSearch;