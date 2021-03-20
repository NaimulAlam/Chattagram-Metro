import React, { useEffect, useState } from "react";
import { CardColumns, CardDeck, Col, Container, Row } from "react-bootstrap";
import fakeData from "../../fakeData/fakeData.json";
import Tickets from "../Tickets/Tickets";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(fakeData);
    console.log(fakeData);
  }, []);

  return (
    <Container className="mt-5">
      <CardDeck>
        {tickets.map((ticket) => (
          <Tickets ticket={ticket}></Tickets>
        ))}
      </CardDeck>
    </Container>
  );
};

export default Home;
