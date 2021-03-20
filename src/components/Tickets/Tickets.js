import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Tickets.css";

const Tickets = (ticket) => {
  const { title, imgUrl, price, ticketType } = ticket.ticket;
  const history = useHistory();
  const handleTicket = (ticketType) => {
    history.push(`/destination/${ticketType}`);
  };

  const ImgStyle = {
    opacity: "0.8",
    backgroundImage: `url(${imgUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };

  return (
    <Col className="cardsStyle mt-2" xs={12} md={6} lg={3}>
      <Col style={ImgStyle} className="text-center">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <h1>{price}$</h1>
        <Col className="mt-5 pt-5">
          <Link to={ticketType}>
            <Button onClick={() => handleTicket(ticketType)} variant="danger">
              Buy Now
            </Button>
          </Link>
        </Col>
      </Col>
    </Col>
  );
};

export default Tickets;
