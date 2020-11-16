import React from "react";
import { Container } from 'reactstrap';
import Navigation from "../components/Navigation"
import WelcomeMessage from "../components/WelcomeMessage";
import "./welcome.css";

function Welcome(props) {
    return <>
        <Navigation user={props.user} />
        <main class="welcomePage">
            <Container fluid>
                <WelcomeMessage />
            </Container>
        </main>
    </>;
}

export default Welcome;
