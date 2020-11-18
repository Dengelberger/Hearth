import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Navigation from "../components/Navigation"
import axios from "axios"

function Signup(props) {

    const handleSignup = (event) => {
        event.preventDefault();
        const newUser = {
            first_name: event.target.firstName.value,
            last_name: event.target.lastName.value,
            username: event.target.email.value,
            password: event.target.password.value
        }
        console.log(newUser)
        axios.post("/api/register", newUser).then(res => {
            console.log(res.data)
        }).catch(err => { console.log(err) });
    }



    return <main className="mainBackground">
        <Navigation user={props.user} />
        <Container>
            <h1>Signup</h1>
            <Form onSubmit={handleSignup}>
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
                <Button type="submit" color="primary">Submit</Button>
            </Form>
        </Container>
    </main>;
}

export default Signup;