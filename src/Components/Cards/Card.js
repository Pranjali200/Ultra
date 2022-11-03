import React from "react";
import "./Card.css";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

 const Card = ({title, imageUrl, body}) => {
   // function Card({title, imageUrl, body}){
  return (
    <div className="card-container" style={{marginRight:'25px'}}>
      <div className="image-container">
        <img src={imageUrl} alt=""/>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3 >{title}</h3>
        </div>
        <div className="card-body">
          <p style={{marginBottom:'0px'}}>{body}</p>
        </div>
      </div>
      <div className="btn" id="btn-card">
        {/* <button > 
        <Link to="/ayur" style={{textDecoration:'none',color:'black'}}>View more</Link>
          <a className="btn-txt" style={{textDecoration:'none',color:'black'}}>View more</a>
          <Link to={path}>View</Link> 
          <Link to={path}>Xs</Link>
        </button> */}
      </div>
    </div>
  );
};

export default Card;
