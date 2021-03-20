import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import fakeData from "../../fakeData/fakeData.json";
import Tickets from "../Tickets/Tickets";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(fakeData);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {tickets.map((ticket) => (
            <Tickets ticket={ticket}></Tickets>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
