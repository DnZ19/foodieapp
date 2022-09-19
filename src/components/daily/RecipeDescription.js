import React from 'react';


function RecipeDescription({subTitle, dishTypes }) {

    return (
        <div>

            <h4>{subTitle}</h4>
            <ul>
                {dishTypes.map(dishType => (
                    <li>{dishType}</li>
                ))}
            </ul>

        </div>
    );
}

export default RecipeDescription;
