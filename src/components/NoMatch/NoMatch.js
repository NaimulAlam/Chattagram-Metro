import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <Jumbotron fluid className="notFound">
      <Container>
        <h1 style={{ color: "red" }}>Sorry! 404 Not Found</h1>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </Container>
    </Jumbotron>
  );
};

export default NoMatch;
