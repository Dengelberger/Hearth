import React from 'react';
import { Container, Row } from 'reactstrap';
import "./Memory.css"

const Memory = (props) => {
    return (
        <div className="memoryBody">
            {!props.user || props.user._id !== props.memory.created_by._id? "" : <div id={props.memory._id} onClick={props.handleDeleteMemory} className="positionFixed"><p>X</p></div>}
            <p className="memoryText">{props.memory.text}</p>
            <Row>
                <div className="imageCrop">
                    <img className="userImg" src={props.memory.created_by.picture ? props.memory.created_by.picture : "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/124629502_10207611805009182_7907440485958271956_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=h7ILmYj6YrMAX9Mc_ie&_nc_ht=scontent-lga3-1.xx&oh=54cb309066e69b337d982d2f92e5559b&oe=5FD46657"}></img>
                </div>
                <p className="marginMe">{props.memory.created_by.first_name + " " + props.memory.created_by.last_name}</p>
            </Row>
        </div>
    );
}

export default Memory;