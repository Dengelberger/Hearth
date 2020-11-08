import React from "react";
import { Container } from "reactstrap";
import Navigation from "../components/Navigation"
import { useParams } from "react-router-dom"
import RecipeDisplay from "../components/RecipeDisplay";

function Recipe() {
    let { id } = useParams();


    return <>
        <Navigation />
        <RecipeDisplay id={id}/>
    </>
}

export default Recipe;