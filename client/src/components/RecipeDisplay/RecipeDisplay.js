import React from 'react';
import { Container, Row } from 'reactstrap';
import Memory from '../Memory';
import "./RecipeDisplay.css"

const RecipeDisplay = (props) => {
    return (
        <Container>
            <img className="mainImg" src={"https://www.simplyrecipes.com/wp-content/uploads/2007/01/roast-chicken-carrots-sally-horiz-a-1800.jpg"}></img>
            <div>
                <h2>Roasted Chicken {props.id}</h2>
                <Row>
                    <div className="imageCropBig">
                        <img className="userImg" src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-1/p240x240/14242478_10207434415158481_4224930884287482542_o.jpg?_nc_cat=109&ccb=2&_nc_sid=7206a8&_nc_ohc=DkAMM8VxWn4AX-cEXXI&_nc_ht=scontent-lga3-1.xx&tp=6&oh=d0e593593fd4bf4713334f275d9578de&oe=5FCF95AF"></img>
                    </div>
                    <p><a href="/homecook/{homecookID}">Karin Stubbs</a></p>

                </Row>
                <Row>
                    <p>added by </p>
                    <div className="imageCrop">
                        <img className="userImg" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/cp0/p80x80/53476434_10205435509803162_4364216230534447104_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=ldM-bS8YA5UAX-exUDe&_nc_ht=scontent-lga3-1.xx&tp=27&oh=6e729001eb0c29e0bbe8fcd24cd41be1&oe=5FCC0A96"></img>
                    </div>
                    <p>Kevin Connell</p>
                </Row>

            </div>
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
            <div className="memoryBody">
                <p>A hen living on a farm finds some wheat and decides to make bread with it. She asks the other farmyard animals for help planting it, but they refuse. The hen then harvests and mills the wheat into flour before baking it into bread; at each stage she again asks the animals for help and they refuse.</p>
                <Row>
                    <div className="imageCrop">
                        <img className="userImg" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/cp0/p80x80/53476434_10205435509803162_4364216230534447104_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=ldM-bS8YA5UAX-exUDe&_nc_ht=scontent-lga3-1.xx&tp=27&oh=6e729001eb0c29e0bbe8fcd24cd41be1&oe=5FCC0A96"></img>
                    </div>
                    <p className="marginMe">Kevin Connell</p>
                </Row>
            </div>
            <Memory />


        </Container>
    );
}

export default RecipeDisplay;