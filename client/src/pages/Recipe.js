import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Navigation from "../components/Navigation"
import { useParams } from "react-router-dom"
import RecipeDisplay from "../components/RecipeDisplay";
import axios from "axios"

function Recipe(props) {

    const [thisRecipe, setThisRecipe] = useState();

    let { id } = useParams();

    useEffect(() => {

        axios.get("/api/recipe/" + id).then(res => {
            console.log("Recipe DATA:")
            console.log(res.data);
            setThisRecipe(res.data);
        }).catch(err => { console.log(err) });

    }, []);

    return <>
        <Navigation user={props.user}/>
        <RecipeDisplay  recipe={thisRecipe}/>
    </>
}

export default Recipe;