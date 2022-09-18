import React, {useState, useEffect} from 'react';
import styles from "./Daily.module.css";
import RecipeCardDaily from "./RecipeCardDaily";
import RecipeDescription from "./RecipeDescription";
import {Link} from "react-router-dom";
import axios from "axios";

function refreshRecipe() {
    window.location.reload(false);
}

function Daily() {
    const [dailyRecipe, setDailyRecipe] = useState({});

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=1`);

                console.log(result.data);
                setDailyRecipe(result.data);

            } catch (e) {
                console.error(e)
            }
        }

        fetchData();

    }, []);

    return (

        <>
            <header>
                <h3>Daily Recommendation</h3>

                <button
                    type="button"
                    onClick={() => refreshRecipe()}
                    className={styles["recommend-refresh-button"]}
                >
                    Get a new recipe!
                </button>
            </header>

            {Object.keys(dailyRecipe).length > 0 &&

                <section>
                    {dailyRecipe.recipes.map((recipe) => {
                        return (

                            <article
                                key={recipe.id}
                                className={styles["main-recipe-container"]}
                            >

                                <div className={styles["recommendation-card"]}>
                                    <Link
                                        to={"/recipe/" + recipe.id}
                                        className={styles["card-link"]}
                                        key={recipe.id}
                                    >
                                        <RecipeCardDaily
                                            key={recipe.id}
                                            id={recipe.id}
                                            image={recipe.image}
                                            alt={recipe.title}
                                            title={recipe.title}
                                            styleCard="card"
                                            styleCardImage="card__image"
                                            styleCardTitle="card__title"
                                            styleCardInfo="card__info"
                                            styleCardButton="cardButtons"
                                            // dishTypes={recipe.dishTypes}
                                            // stylesDescription="card__description"
                                        />
                                    </Link>
                                </div>

                                <div className={styles["recommendation-description"]}>

                                <RecipeDescription
                                title="Description"
                                subTitle="Dish Type:"
                                dishTypes={recipe.dishTypes}
                                styleCard="card"


                                />
                                </div>




                            </article>
                        )
                    })}
                </section>
            }
        </>
    )
}

export default Daily