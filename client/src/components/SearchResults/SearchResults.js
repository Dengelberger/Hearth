import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import "./SearchResults.css";


const SearchResults = (props) => {

  return (
    <div className="search">
      <Row id={props.info._id} key={props.info._id} onClick={props.handleRecipeClick}>
          <img className="picture" src={props.info.main_image}></img>
          <Col>
          <h2>{props.info.title}</h2>
          <h4 className="author">by {props.info.home_cook_id.name}</h4>
          <h5 className="category">{props.info.category}</h5>
          </Col>
      </Row>
    </div>
  );
}

export default SearchResults;