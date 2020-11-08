import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import Navigation from "../components/Navigation"

function Welcome() {
    return <>
        <Navigation />
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">Welcome Page</h1>
                <p className="lead">This is generic welcome text for our welcome page to be changed into something more useful later</p>
            </Container>
        </Jumbotron>
    </>;
}

export default Welcome;
