import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Navigation from "../components/Navigation"
import { useParams } from "react-router-dom"
import RecipeDisplay from "../components/RecipeDisplay";
import axios from "axios"

function Recipe(props) {

    const [thisRecipe, setThisRecipe] = useState({
        _id:"",
        category: "",
        home_cook_id: "",
        ingredients: [],
        instructions: [],
        main_image: "",
        title: "",
        second_images: [],
        memories: []
    });

    let { id } = useParams();

    useEffect(() => {

        axios.get("/api/recipe/" + id).then(res => {
            console.log("Recipe DATA:")
            console.log(res.data);
            setThisRecipe(res.data);
        }).catch(err => { console.log(err) });

    }, []);

    return <main className="mainBackground">
        <Navigation user={props.user}/>
        <RecipeDisplay user={props.user} key={thisRecipe._id} recipe={thisRecipe}/>
    </main>
}

export default Recipe;