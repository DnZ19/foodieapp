import React from 'react';
import styles from "./Daily.module.css";


function RecipeDescription({title, subTitle, dishTypes, styleCard }) {

    return (
        <div
            className={styles[styleCard]}
        >
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <ol>
                {dishTypes.map(dishType => (
                    <li>{dishType}</li>
                ))}
            </ol>

        </div>
    );
}

export default RecipeDescription;
