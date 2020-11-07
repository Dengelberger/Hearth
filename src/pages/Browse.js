import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/Navigation"
import SearchResults from "../components/SearchResults";
import masterList from "../recipeExample.json"

function Browse() {
    const [publicList, setPublicList] = useState({});
    const [searchedList, setSearchedList] = useState({});

    // const [search, setSearch] = useState("");
    // const [select, setSelect] = useState("All");

    React.useEffect(() => publicOnly(masterList), [])

    const publicOnly = (list) => {
        let publicList = list.filter(item => item.is_private === false);
        setPublicList(publicList)
    } 

    const handleSearch = (event) => {
        event.preventDefault();
        let searchTerm = document.getElementById('searchInput').value;
        let selectTerm = document.getElementById('selectInput').value;
        console.log(searchTerm);
        console.log(selectTerm);
        let newSearch = publicList.filter(item => item.title.toLowerCase().includes((searchTerm).toLowerCase()) || item.homecook.toLowerCase().includes((searchTerm).toLowerCase()))
        if (selectTerm !== "All") {
            newSearch = newSearch.filter(item => item.catagory === selectTerm);
        };
        setSearchedList(newSearch);
    }

    const handleRecipeClick = (event) => {
        console.log(event.currentTarget.id)
        location.href = ('/recipes/'+event.currentTarget.id);
    }


    return <>
        <Navigation />
        <Container>
            <h1>Search</h1>
            <Form onSubmit={handleSearch}>
                <Label for="exampleSearch">Search</Label>
                <Input onChange={handleSearch}
                    type="text"
                    name="search"
                    id="searchInput"
                    placeholder="search placeholder"
                />
                <Input onChange={handleSearch} type="select" name="select" id="selectInput">
                    <option>All</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Appitizer</option>
                    <option>Dessert</option>
                </Input>
            </Form>
            {searchedList.length > 0 ? searchedList.map(item => <SearchResults id={item.id} picture={item.picture} title={item.title} homecook={item.homecook} catagory={item.catagory} handleRecipeClick={handleRecipeClick}/>): <p>no search results</p>}

        </Container>
    </>;
}

export default Browse;