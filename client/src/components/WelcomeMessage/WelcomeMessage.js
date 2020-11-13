import React from "react";
import { Container, Col, Row } from 'reactstrap';
import "./WelcomeMessage.css";

function WelcomeMessage () {
return (
    <Container 
        style={{ height: 200, clear: "both", paddingTop: 20, textAlign: "center" }}
        className="welcomeMessage">
        <p>Welcome to a place where you can store and share your favorite family recipes and all about the people who gave them to you.</p>
        <p>Please sign-up or login at the upper right corner of the page.</p>
        <p> Happy memory making!</p>
    </Container>
);
}

export default WelcomeMessage;
