import React from "react";
import { Container } from "reactstrap";
import Navigation from "../components/Navigation"
import { useParams } from "react-router-dom"
import RecipeDisplay from "../components/RecipeDisplay";

function Recipe() {

    let { id } = useParams();

    useEffect(() => {
        
        axios.get("/api/user").then(res => {
          console.log("USER DATA:")
          console.log(res.data);
      }).catch(err => { console.log(err) });
      
      }, []);

    


    return <>
        <Navigation />
        <RecipeDisplay id={id}/>
    </>
}

export default Recipe;