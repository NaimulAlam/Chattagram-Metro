import { Container, Form, Row, Col, Image, Button } from "react-bootstrap";
import "./Destination.css";
import mapImg from "../../images/image 6.png";
import { useParams } from "react-router";
import React, { useState } from "react";
import "./Destination.css";
import DateTimePicker from "react-datetime-picker";
import Map from "./Map";

const Destination = () => {
  const { ticketType } = useParams();
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={4}>
            <Form className="locationCard m-2 p-3">
              <Col className="m-2">
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Start From</Form.Label>
                  <Form.Control type="text" placeholder="Agrabad" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Destination To</Form.Label>
                  <Form.Control type="text" placeholder="GEC" />
                </Form.Group>
              </Col>
              <Col className="m-3">
                <DateTimePicker
                  onChange={onChange}
                  value={value}
                ></DateTimePicker>
              </Col>
              <Col>
              <Button to={ticketType} variant="warning" size="lg" block>
                Search
              </Button>
              </Col>
            </Form>
          </Col>
          <Col  xs={12} sm={8}>
            <Map></Map>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Destination;
