import React from "react";
import { Container, Col, Row } from 'reactstrap';
import "./WelcomeMessage.css";

function WelcomeMessage() {
    return (
        <Container className="welcomeMessage">
            <div className="messageHeader">
                <h1>Welcome to Hearth.</h1>
            </div>
            <div className="messageContainer">
                <p>Wecome to a place where you can store and share your favorite family recipes and all about the people who gave them to you.</p>
            </div>
            <div className="messageContainer">
                <p>Please sign-up or login at the upper right corner of the page.</p>
            </div>
            <div className="messageContainer">
                <p> Happy memory making!</p>
            </div>
        </Container>
    );
}

export default WelcomeMessage;
