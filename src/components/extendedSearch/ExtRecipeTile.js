import React from "react";
import styles from "./ExtendedSearch.module.css";

function ExtRecipeTile({ recipe })    {
    return  (
        <div className={styles["ext-recipe-tile"]}>
            <img
                className={styles["ext-recipe-img"]}
                src={recipe["recipe"].image}
                alt={recipe["recipe"].label}
            />

            <p className={styles["ext-recipe-tile-title"]}>{recipe["recipe"].label}</p>

        </div>
    );
}

export default ExtRecipeTile;