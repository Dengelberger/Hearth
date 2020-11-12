import React from 'react';
import { Col } from 'reactstrap';
import { Container, Row, Card, CardText, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import RecipeTile from '../RecipeTile';
import "./ProfileDisplay.css"

const ProfileDisplay = (props) => {

    const handleRecipeClick = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        window.location.href=("/recipe/"+event.target.id)
    }

    return (
        <Container>
            <div className="profileTop">
                <div className="profileCropBig">
                    <img className="profileImg" src={props.person.picture}></img>
                </div>
                <h1>{props.person.name}</h1>
            </div>
            <div className="bio">
                <p>{props.person.bio}</p>
            </div>
            <h3 className="recipeHeader">Recipes:</h3>
            <hr />
            <div className="recipeContainer">
                {props.recipes.map(item => <RecipeTile handleRecipeClick={handleRecipeClick} title={item.title} key={item._id} id={item._id} picture={item.main_image} />)}
            </div>
            
            {/* <div className="mainImg"></div>
            <div>
                <Row>
                    <div className="imageCropBig">
                        <img className="userImg" src={props.person.main_image}></img>
                    </div>
                    <h4>{props.person.name}</h4>
                </Row>
            </div>
            {props.recipes.length > 0 ? props.recipes.map(item => <SearchResults id={item._id} picture={item.main_picture} title={item.title} homecook={props.person.name} category="General"/>): <p>no search results</p>} */}

        </Container>
    );
}

export default ProfileDisplay;