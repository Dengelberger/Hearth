import React from "react";
import { Jumbotron, Container, Col, Row } from 'reactstrap';
import Navigation from "../components/Navigation"
import WelcomeJumbotron from "../components/WelcomeJumbotron";
import Poem from "../components/Poem";
import WelcomeMessage from "../components/WelcomeMessage";
import "./welcome.css";

function Welcome(props) {
    return <>
        <Navigation user={props.user} />
        <main class="welcomePage">
            <WelcomeJumbotron />
            <Container fluid>
                <Row>
                    <Col sm="6" id="messageBox">
                        <WelcomeMessage />
                    </Col>
                    <Col sm="6" id="poembox">
                        <Poem />
                    </Col>
                </Row>
            </Container>
        </main>
    </>;
}

export default Welcome;
