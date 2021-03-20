import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
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
          <Col className="mt-3" xs={12} md={6} lg={3}>
            <Tickets ticket={ticket}></Tickets>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
