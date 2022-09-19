import styles from "./Daily.module.css";

function RecipeCardDaily({
                             image,
                             title,
                             styleCardImage,
                             styleCardTitle,
                             styleCardInfo,
                             styleCardButton,
                         }) {
    return (
        <>

                    <img src={image} className={styles[styleCardImage]}/>

                    <div className={styles[styleCardInfo]}>
                        <h4 className={styles[styleCardTitle]}> {title} </h4>

                        <button type="button" className={styles[styleCardButton]}>

                            To the recipe

                        </button>
                    </div>

        </>

    );
}

export default RecipeCardDaily;