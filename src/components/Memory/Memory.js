import React from 'react';
import { Container, Row } from 'reactstrap';
import "./Memory.css"

const Memory = (props) => {
    return (
        <div className="memoryBody">
            <p>A hen living on a farm finds some wheat and decides to make bread with it. She asks the other farmyard animals for help planting it, but they refuse. The hen then harvests and mills the wheat into flour before baking it into bread; at each stage she again asks the animals for help and they refuse.</p>
            <Row>
                <div className="imageCrop">
                    <img className="userImg" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/cp0/p80x80/53476434_10205435509803162_4364216230534447104_n.jpg?_nc_cat=102&ccb=2&_nc_sid=7206a8&_nc_ohc=ldM-bS8YA5UAX-exUDe&_nc_ht=scontent-lga3-1.xx&tp=27&oh=6e729001eb0c29e0bbe8fcd24cd41be1&oe=5FCC0A96"></img>
                </div>
                <p className="marginMe">Kevin Connell</p>
            </Row>
        </div>
    );
}

export default Memory;