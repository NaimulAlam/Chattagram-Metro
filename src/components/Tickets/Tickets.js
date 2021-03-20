import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Tickets.css';

const Tickets = (props) => {
    const { title, imgUrl, price } = props.ticket;
  return (
    <Card className="text-white cardsStyle">
      <Card.Img className="CardImg" src={imgUrl} alt="Card image" fluid />
      <Card.ImgOverlay>
        <Card.Body >
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Link to='/destination'><Button variant="danger">Buy Now</Button></Link>
        <Card.Footer>
          <h1>{price}$</h1>
        </Card.Footer>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Tickets;
