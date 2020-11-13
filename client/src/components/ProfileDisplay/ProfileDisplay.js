import React from 'react';
import { Container } from 'reactstrap';
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
                {props.recipes.map(item => <RecipeTile delete={false} handleRecipeClick={handleRecipeClick} title={item.title} key={item._id} id={item._id} picture={item.main_image} />)}
            </div>

        </Container>
    );
}

export default ProfileDisplay;