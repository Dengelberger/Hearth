import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/Navigation"
import SearchResults from "../components/SearchResults";
import axios from "axios"
import "./Browse.css"

function Browse(props) {
    const [publicList, setPublicList] = useState([]);
    const [searchedList, setSearchedList] = useState([{_id:"3", home_cook_id: {name: "Fran"}}]);

    // const [search, setSearch] = useState("");
    // const [select, setSelect] = useState("All");

    React.useEffect(() => {
        axios.get("/api/recipe").then(res => {
            console.log("Recipe DATA:")
            console.log(res.data);
            setPublicList(res.data);
            setSearchedList(res.data);
        }).catch(err => { console.log(err) });
    }, [])

    const handleSearch = () => {
        let searchTerm = document.getElementById('searchInput').value;
        let selectTerm = document.getElementById('selectInput').value;
        console.log(searchTerm);
        console.log(selectTerm);
        let newSearch = publicList.filter(item => item.title.toLowerCase().includes((searchTerm).toLowerCase()) || item.home_cook_id.name.toLowerCase().includes((searchTerm).toLowerCase()))
        if (selectTerm !== "All") {
            newSearch = newSearch.filter(item => item.category === selectTerm);
        };
        console.log("this is the new search")
        console.log("-----------------------")
        console.log(newSearch)
        setSearchedList(newSearch);
        console.log("this is SearchedList")
        console.log("-----------------------")
        console.log(searchedList)
    }

    const handleRecipeClick = (event) => {
        console.log(event.currentTarget.id)
        location.href = ('/recipe/' + event.currentTarget.id);
    }

    const stopDefault = (event) => {
        event.preventDefault()
    }


    return <>
        <Navigation user={props.user} />
        <Container>
            <h1>Search</h1>
            <Form className="searchHeader" onSubmit={stopDefault}>
                <Input onChange={handleSearch}
                    type="text"
                    name="search"
                    id="searchInput"
                    placeholder="search..."
                />
                <Input onChange={handleSearch} type="select" name="select" id="selectInput">
                    <option>All</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Appetizer</option>
                    <option>Dessert</option>
                </Input>
            </Form>
            <div className="finishing">
                {searchedList.length > 0 ? searchedList.map(item => <SearchResults info={item} handleRecipeClick={handleRecipeClick} />) : <div className="noResultsDiv"><h2>no search results</h2></div>}
            </div>


        </Container>
    </>;
}

export default Browse;