import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/Navigation"

function Browse() {

    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(document.getElementById('searchInput').value)
        console.log(document.getElementById('selectInput').value)
    }



    return <>
        <Navigation />
        <Container>
            <h1>Search</h1>
            <Form onSubmit={handleSearch}>
                <Label for="exampleSearch">Search</Label>
                <Input
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

        </Container>
    </>;
}

export default Browse;