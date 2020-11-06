import React, {useState} from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/Navigation"

function Browse() {

    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(event.target.querySelector('input').value)
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
            </Form>

        </Container>
    </>;
}

export default Browse;