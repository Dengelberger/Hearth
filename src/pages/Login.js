import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Navigation from "../components/Navigation"

function Login() {
    return <>
        <Navigation />
        <Container>
            <h1>LOGIN</h1>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </Container>
    </>;
}

export default Login;
