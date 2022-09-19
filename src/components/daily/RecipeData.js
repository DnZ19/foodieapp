import React from 'react';
import styles from "./Daily.module.css";


function RecipeData({time, score, diets, recipeData}) {

    return (
        <div>

            <h4>Information:</h4>
            <div className={styles[recipeData]}>
                <p>Cooking time: {time}</p>
                <p>Health score: {score}</p>
                <p>Diet type: {diets}</p>

            </div>


        </div>
    );
}

export default RecipeData;
