import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navigation from "../components/Navigation"

function Signup() {
    return <>
        <Navigation />
        <Container>
            <h1>Signup</h1>
            <Form>
                <FormGroup>
                    <Label for="firstNameInput">First Name</Label>
                    <Input type="firstName" name="firstName" id="firstNameInput" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastNameInput">Last Name</Label>
                    <Input type="lastName" name="lastName" id="lastNameInput" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="emailInput">Email</Label>
                    <Input type="email" name="email" id="emailInput" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="passwordInput">Password</Label>
                    <Input type="password" name="password" id="passwordInput" placeholder="password placeholder" />
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        </Container>
    </>;
}

export default Signup;