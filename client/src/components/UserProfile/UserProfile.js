import React, { useEffect, useState } from 'react';
import { Container, Input } from 'reactstrap';
import RecipeTile from '../RecipeTile';
import "./UserProfile.css"
import axios from "axios"

const UserProfile = (props) => {

    const [theseRecipes, setTheseRecipes] = useState([]);

    useEffect(() => {

        axios.get("/api/recipe").then(res => {
            console.log("All recipes DATA:")
            console.log(res.data);
            let recipes = res.data.filter(item => item.created_by === props.user._id)
            console.log("Filtered:")
            console.log(recipes);
            setTheseRecipes(recipes);
        }).catch(err => { console.log(err) });

    }, []);

    const handlePictureChange = async (event) => {
        event.preventDefault();
        if (!event.target.files[0]) { return }
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onloadend = () => {
            axios.post("/api/upload", { data: reader.result }).then(res => {
                axios.put(("/api/profile/" + props.user._id), {picture : res.data.url}).then(res => {
                    window.location.reload()
                    
                }).catch(err => { console.log(err) });
                
            }).catch(err => { console.log(err) });
        }

    }

    

    const handleRecipeClick = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        window.location.href=("/recipe/"+event.target.id)
    }

    return (
        <Container>
            <div className="userTop">
                <div className="userCropBig">
                    <img className="userImg" src={props.user.picture? props.user.picture: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/124629502_10207611805009182_7907440485958271956_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=h7ILmYj6YrMAX9Mc_ie&_nc_ht=scontent-lga3-1.xx&oh=54cb309066e69b337d982d2f92e5559b&oe=5FD46657"}></img>
                </div>
                <h1>{props.user.first_name + " " + props.user.last_name}</h1>
            </div>
            <div className="subTop">
                <p className="updateText">Update Your Picture:</p>
                <Input className="updatePic" onChange={handlePictureChange} type="file" name="homecookPicture" id="profilePicture" />
            </div>
            <h3 className="recipeHeader">Your Recipes:</h3>
            <hr />
            <div className="recipeContainer">
                {theseRecipes.map(item => <RecipeTile delete={true} handleRecipeClick={handleRecipeClick} title={item.title} key={item._id} id={item._id} picture={item.main_image} />)}
            </div>
        </Container>
    );
}

export default UserProfile;