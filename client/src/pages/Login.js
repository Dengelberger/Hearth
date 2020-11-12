import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Navigation from "../components/Navigation"
import axios from "axios";

function Login(props) {

    const handleLogin = (event) => {
        event.preventDefault();
        const loginUser = {
            username: event.target.email.value,
            password: event.target.password.value
        }
        console.log(loginUser)
        axios.post("/api/login", loginUser).then(res => {
            console.log(res.data)
            window.location.href = "/browse"
        }).catch(err => { console.log(err) });
    }

    return <>
        <Navigation user={props.user}/>
        <Container>
            <h1>LOGIN</h1>
            <Form onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    </>;
}

export default Login;
