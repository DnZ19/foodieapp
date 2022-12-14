import styles from "./Search.module.css";


function CardRecipe({
                        image,
                        title,
                        styleCard,
                        styleCardImage,
                        styleCardTitle,
                        styleCardInfo,
                        styleCardButton,
                        dishTypes,
                    }) {
    return (
        <>
            <div className={styles[styleCard]}>

                <img src={image} className={styles[styleCardImage]}/>

                <div className={styles[styleCardInfo]}>
                    <h4 className={styles[styleCardTitle]}> {title} </h4>

                    <button type="button" className={styles[styleCardButton]}>

                        To the recipe

                    </button>
                </div>
            </div>
        </>

    );
}

export default CardRecipe;