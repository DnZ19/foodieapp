import styles from "./Daily.module.css";

function RecipeCardDaily({
                             image,
                             title,
                             styleCard,
                             styleCardImage,
                             styleCardTitle,
                             styleCardInfo,
                             styleCardButton,
                             dishTypes,
                             stylesDescription
                         }) {
    return (
        <>
            <div className={styles[styleCard]}>

                <div className={styles[styleCard]}>
                    <img src={image} className={styles[styleCardImage]}/>

                    <div className={styles[styleCardInfo]}>
                        <h4 className={styles[styleCardTitle]}> {title} </h4>

                        <button type="button" className={styles[styleCardButton]}>

                            To the recipe

                        </button>

                    </div>

                </div>

            </div>
            {/*<div className={styles[stylesDescription]}>*/}
            {/*    <h3>Description</h3>*/}
            {/*    <ol>*/}
            {/*        {dishTypes.map(dishType => (*/}
            {/*            <li>{dishType}</li>*/}
            {/*        ))}*/}
            {/*    </ol>*/}

            {/*</div>*/}
        </>

    );
}

export default RecipeCardDaily;