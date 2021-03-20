import React from "react";
import { Container, Form, Row, Col, Image, Button } from "react-bootstrap";
import "./Destination.css";
import mapImg from "../../images/image 6.png";

const Destination = (props) => {
  

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={4}>
          <Form className="locationCard m-2 p-3">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Start From</Form.Label>
              <Form.Control type="text" placeholder="Agrabad" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Destination To</Form.Label>
              <Form.Control type="text" placeholder="GEC" />
            </Form.Group>
            <Button variant="warning" size="lg" block>
              Search
            </Button>
          </Form>
        </Col>
        <Col className="Map" sm={8}>
          <Image src={mapImg} alt="Map" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;
