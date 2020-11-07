import React from 'react';
import { Container } from 'reactstrap';
import "./RecipeDisplay.css"

const RecipeDisplay = (props) => {
  return (
    <Container>
        <img className="mainImg" src="https://www.simplyrecipes.com/wp-content/uploads/2007/01/roast-chicken-carrots-sally-horiz-a-1800.jpg"></img>
        <h2>Roasted Chicken {props.id}</h2>
        <h4>Ingredients</h4>
        <ul>
            <li>1 Large Chicken</li>
            <li>1 Medium Red Onion</li>
            <li>2 Tsp Salted Butter</li>
            <li>1 Pinch of Black Pepper</li>
            <li>1 Cup of Olive Oil</li>
        </ul>
        <h4>Directions</h4>
        <ol>
            <li>Preheat oven to 350 degrees F (175 degrees C).</li>
            <li>Place chicken in a roasting pan, and season generously inside and out with salt and pepper. Sprinkle inside and out with onion powder. Place 3 tablespoons margarine in the chicken cavity. Arrange dollops of the remaining margarine around the chicken's exterior. Cut the celery into 3 or 4 pieces, and place in the chicken cavity.</li>
            <li>Bake uncovered 1 hour and 15 minutes in the preheated oven, to a minimum internal temperature of 180 degrees F (82 degrees C). Remove from heat, and baste with melted margarine and drippings. Cover with aluminum foil, and allow to rest about 30 minutes before serving.</li>
        </ol>
        <h4>Memories</h4>
        <p>A hen living on a farm finds some wheat and decides to make bread with it. She asks the other farmyard animals for help planting it, but they refuse. The hen then harvests and mills the wheat into flour before baking it into bread; at each stage she again asks the animals for help and they refuse.</p>
        <h5>Kevin Connell</h5>
        <p>Finally the hen has completed her task and asks who will help her eat the bread. This time the animals accept eagerly, but the hen rebuffs them stating that, just as she made the bread herself, she will eat the bread herself, and runs away with the bread.</p>
        <h5>Tina</h5>


    </Container>
  );
}

export default RecipeDisplay;