import React from "react";
import "./PsCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
 const PsCard = (props) => {
    let {imgSrc, price, title} = props.data;
  return (
    <div className="">
         <Card className="p-0 overflow-hidden shadow">
             <div className="overflow-hidden rounded p-0 bg-dark">
                <Card.Img variant="top" src={imgSrc} />
             </div>
              <Card.Body className="text-center">
                 {/* <Card.Title className="display-6">{price}</Card.Title> */}
                 <Card.Title>{title}</Card.Title>
             </Card.Body>    
             {/* <Button className="w-100 rounded-0" variant="success">Add To Cart</Button>  */}
         </Card>
    </div>
  );
};

export default PsCard;