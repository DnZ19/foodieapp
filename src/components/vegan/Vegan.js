import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../daily/Daily.module.css";
import {Link} from "react-router-dom";
import RecipeCardDaily from "../daily/RecipeCardDaily";
import RecipeDescription from "../daily/RecipeDescription";
import RecipeData from "../daily/RecipeData";

function refreshRecipe() {
    window.location.reload(false);
}

function Vegan() {
    const [veganRecipe, setVeganRecipe] = useState({});

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1&tags=vegetarian`);

                console.log(result.data);
                setVeganRecipe(result.data);

            } catch (e) {
                console.error(e)
            }
        }

        fetchData();

    }, []);

    return (

        <>
            <header>
                <h3>Vegan recipes</h3>

                <button
                    type="button"
                    onClick={() => refreshRecipe()}
                    className={styles["recommend-refresh-button"]}
                >
                    Get a new recipe!
                </button>
            </header>

            {Object.keys(veganRecipe).length > 0 &&

                <section>
                    {veganRecipe.recipes.map((recipe) => {
                        return (

                            <article
                                key={recipe.id}
                                className={styles["recipe-container"]}
                            >

                                <div className={styles["recommendation-card"]}>
                                    <Link
                                        to={"/recipe/" + recipe.id}
                                        className={styles["card-link"]}
                                        key={recipe.id}
                                    >
                                        <RecipeCardDaily
                                            id={recipe.id}
                                            image={recipe.image}
                                            alt={recipe.title}
                                            title={recipe.title}
                                            styleCard="card"
                                            styleCardImage="card__image"
                                            styleCardTitle="card__title"
                                            styleCardInfo="card__info"
                                            styleCardButton="cardButtons"
                                        />
                                    </Link>
                                </div>

                                <div className={styles["recipe-info-tile"]}>
                                    <div className={styles["recommendation-description"]}>

                                        <RecipeDescription
                                            subTitle="Dish Type:"
                                            dishTypes={recipe.dishTypes}
                                            styleCard="card"
                                        />
                                    </div>

                                    <div className={styles["recommendation-description"]}>

                                        <RecipeData
                                            recipeData="recipe-data"
                                            styleCard="card"
                                            time={recipe.readyInMinutes}
                                            score={recipe.healthScore}
                                            diets={recipe.diets}
                                        />
                                    </div>


                                </div>






                            </article>
                        )
                    })}
                </section>
            }
        </>
    )
}

export default Vegan;