import React from "react";
import { Button, Card } from "react-bootstrap";
import './Tickets.css';

const Tickets = (props) => {
    const { title, imgUrl, price } = props.ticket;
  return (
    <Card className="text-white">
      <Card.Img className="CardImg" src={imgUrl} alt="Card image" fluid />
      <Card.ImgOverlay>
        <Card.Body >
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Button href='destination' variant="warning">Buy Now</Button>
        <Card.Footer>
          <h1>{price}$</h1>
        </Card.Footer>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Tickets;
