import React from "react";
import { Button, Col, Container, Form, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Contact Us</h1>
        <Form>
          <Form.Group>
            <Form.Label column sm={12}>
              Give your Email here; we will send you detail.
            </Form.Label>
            <Col sm={12}>
              <Form.Control type="email" placeholder="Email" required />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label column sm={2} type="text">Any Suggestions</Form.Label>
            <Col sm={12}>
              <Form.Control type="text" placeholder="Normal text" />
            </Col>
          </Form.Group>
          <Form.Group></Form.Group>
          <Link to="/">
            <Button size="lg" block type="submit">
              Submit
            </Button>
          </Link>
        </Form>
      </Container>
    </Jumbotron>
  );
};

export default Contact;
