import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Navigation from "../components/Navigation"
import { useParams } from "react-router-dom"
import RecipeDisplay from "../components/RecipeDisplay";
import axios from "axios"
import ProfileDisplay from "../components/ProfileDisplay";

function HomeCook(props) {

    const [thisHomecook, setThisHomecook] = useState({});
    const [theseRecipes, setTheseRecipes] = useState([]);

    let { id } = useParams();

    useEffect(() => {

        axios.get("/api/homecook/" + id).then(res => {
            console.log("Homecook DATA:")
            console.log(res.data);
            setThisHomecook(res.data);
            axios.get("/api/recipe").then(res => {
                console.log("All recipes DATA:")
                console.log(res.data);
                let recipes = res.data.filter(item => item.home_cook_id._id === id)
                console.log("Filtered:")
                console.log(recipes);
                setTheseRecipes(recipes);
            }).catch(err => { console.log(err) });
        }).catch(err => { console.log(err) });

    }, []);




    return <main className="mainBackground">
        <Navigation user={props.user}/>
        <ProfileDisplay person={thisHomecook} recipes={theseRecipes} />
    </main>
}

export default HomeCook;