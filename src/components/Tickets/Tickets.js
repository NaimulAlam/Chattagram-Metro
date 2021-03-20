import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Tickets.css";

const Tickets = (ticket) => {
  const { title, imgUrl, price, ticketType } = ticket.ticket;
  const history = useHistory();
  const handleTicket = (ticketType) => {
    history.push(`/destination/${ticketType}`);
  };
  return (
    <Card className="text-white cardsStyle">
      <Card.Img className="CardImg" src={imgUrl} alt="Card image" fluid />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Link to={ticketType}>
          <Button onClick={() => handleTicket(ticketType)} variant="danger">Buy Now</Button>
        </Link>
        <Card.Footer>
          <h1>{price}$</h1>
        </Card.Footer>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Tickets;
