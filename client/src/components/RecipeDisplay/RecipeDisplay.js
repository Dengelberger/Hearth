import React from 'react';
import { Container, Row } from 'reactstrap';
import Memory from '../Memory';
import "./RecipeDisplay.css"

const RecipeDisplay = (props) => {
    return (
        <Container>
            <img className="mainImg" src={props.recipe.main_image}></img>
            <div>
                <h2>{props.recipe.title}</h2>
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
                {props.recipe.ingredients.map(item => <li>{item}</li>)}
            </ul>
            <h4>Directions</h4>
            <ol>
                {props.recipe.instructions.map(item => <li>{item}</li>)}
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