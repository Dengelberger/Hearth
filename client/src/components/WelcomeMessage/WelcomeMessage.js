import React from "react";
import { Container, Col, Row } from 'reactstrap';
import "./WelcomeMessage.css";

function WelcomeMessage(props) {
    return (
        <>
            <Container className="welcomeMessage">
                <div className="messageHeader">
                    Welcome{props.user? ", " + props.user.first_name : " to Hearth."}
                </div>
            </Container>
            <Row>
                <Col xs="12" md="7" lg="8">
                    <img className="tree" src="https://res.cloudinary.com/djlzaftm2/image/upload/v1605638351/WelcomeImage_ejs94o.png"></img>
                    <div className="welcomeBlock">
                        <h3>{props.user? "Hearth is the place" : "The place"} to archive old recipes for posterity. Preserve and share your favorite family recipes and all the memories that come with!<br /><br />The kitchen is the heart of the home!</h3>
                    </div>
                    <div className="illustrationDiv">
                        <img className="illustration" src="https://res.cloudinary.com/djlzaftm2/image/upload/v1605642253/RecipeImage_fwmzpx.png" />
                    </div>
                </Col>
                <Col xs="12" md="5" lg="4" className="poemCol">
                    <div className="tabDiv">
                        <div className="poemTab"></div>
                    </div>
                    <div className="poem">
                        <h4>Bread Making</h4>
                        <p>by Roann Mendriq<br/><br />
                        I baked a bit of bread today,<br/>
                        Seasoned it with herb and spice;<br/>
                        I placed it in the oven tray,<br/>
                        Set the timer to be precise.<br/><br/>
                        Soon, the fragrance of fresh bread,<br/>
                        wafted around me like a shawl;<br/>
                        Childhood memories in my head<br/>
                        danced in sweet lilting recall.<br/><br/>
                        I could hear my Grandma's voice,<br/>
                        singing hymns in gentle verse;<br/>
                        My heart sang with her to rejoice,<br/>
                        No need to practice or rehearse!<br/><br/>
                        How wonderful that homely scents,<br/>
                        Heals us whole like sweet incense.</p>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default WelcomeMessage;
