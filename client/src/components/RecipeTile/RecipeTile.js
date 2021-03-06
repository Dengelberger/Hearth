import React from 'react';
import { Button } from 'reactstrap';

const RecipeTile = (props) => {
    return (
        <div key={props.key} className="recipeTile">
            <div className="recipeImgContainer"><img className="recipeImg" src={props.picture} /></div>
            <div>
                <h5 className="recipeTitle">{props.title}</h5>
                <Button style={{backgroundColor: "#CF4747", border: "none", borderRadius: "15px"}} id={props.id} onClick={props.handleRecipeClick}>View Recipe</Button>
            </div>
        </div>
    );
}

export default RecipeTile;