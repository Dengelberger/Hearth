import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import "./SearchResults.css";


const SearchResults = (props) => {

  return (
    <Row className="search" id={props.id} key={props.id} onClick={props.handleRecipeClick}>
        <img className="picture" src={props.picture}></img>
        <Col>
        <h2>{props.title}</h2>
        <h4>by {props.homecook}</h4>
        <h5>for {props.catagory}</h5>
        </Col>
    </Row>
  );
}

export default SearchResults;