import React, { useState } from "react";
import { Container, Form, FormGroup, Input, Label } from "reactstrap";
import Navigation from "../components/Navigation"
import SearchResults from "../components/SearchResults";
import masterList from "../recipeExample.json"

function Builder() {

    return <>
        <Navigation />
        <Container>
            <h1>Recipe Builder</h1>
            <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
            </FormGroup>

        </Container>
    </>;
}

export default Builder;