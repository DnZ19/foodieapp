import React from "react";
import styles from "./ExtendedSearch.module.css";

function ExtRecipeTile({ search })    {
    return  (
        <div>
            <img
                className={styles["ext-recipe-img"]}
                src={search["recipe"].image}
                alt={search["recipe"].label}
            />

            <p className={styles["ext-recipe-tile-title"]}>{search["recipe"].label}</p>

            {/*<button*/}
            {/*    type="button"*/}
            {/*    className={styles["ext-recipe-tile-button"]}*/}
            {/*>*/}
            {/*    To the recipe*/}

            {/*</button>*/}

        </div>
    );
}

export default ExtRecipeTile;