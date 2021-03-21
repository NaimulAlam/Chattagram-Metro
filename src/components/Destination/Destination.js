import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./Destination.css";
import fakeData from "../../fakeData/fakeData.json";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import "./Destination.css";
import Map from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Destination = () => {
  const { ticketType } = useParams();
  // const [value, onChange] = useState(new Date());

  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    setTicket(fakeData);
  }, []);
  const showData = ticket.filter((name) => name === ticketType);
  const [ready, setReady] = useState(false);
  const [place, setPlace] = useState({
    from: "",
    to: "",
    showData: "",
  });
  console.log(place);
  const handleBlur = (e) => {
    let getInfo = true;
    if (getInfo) {
      const newPlace = { ...place };
      newPlace[e.target.name] = e.target.value;
      console.log(newPlace);
      setPlace(newPlace);
    }
  };
  const handleSubmit = () => {
    setReady(!ready);
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} sm={4}>
            {!ready && (
              <Form onSubmit={handleSubmit} className="locationCard m-2 p-3">
                <Col className="m-2">
                  <Form.Group hasValidation controlId="formGroupEmail">
                    <Form.Label>Start From</Form.Label>
                    <Form.Control
                      name="from"
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Agrabad"
                      required
                      isInvalid
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a Location From.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group hasValidation controlId="formGroupPassword">
                    <Form.Label>Destination To</Form.Label>
                    <Form.Control
                      name="to"
                      onBlur={handleBlur}
                      type="text"
                      placeholder="GEC"
                      required
                      isInvalid
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a Location To.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formGroupDate">
                    <Form.Label>Journey Date</Form.Label>
                    <Form.Control
                      name="date"
                      onBlur={handleBlur}
                      type="date"
                      placeholder="GEC"
                      required
                      isInvalid
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose Date of Journey.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Col>
                    <Button
                    type="submit"
                      to={ticketType}
                      size="lg"
                      block
                    >
                      Submit form
                    </Button>
                  </Col>
                </Col>
              </Form>
            )}
            {ready && (
              <div className="locationShow">
                <div>
                  <h2 >Great! You have found some options</h2>
                  <h4 style={{color:'yellow'}}>From: {place.from}</h4>
                  <h3 >To: {place.to} </h3>
                  <p>date: {place.date}</p>
                </div>
                <p>
                  <img src={fakeData[0]?.imgUrl} height="60px" alt="" />{" "}
                  <span>
                    <FontAwesomeIcon icon={faHandPointRight} />
                    {fakeData[0]?.name}
                  </span>{" "}
                  <FontAwesomeIcon icon={faUserFriends} />- 1 Price:
                  {fakeData[0]?.price}$
                </p>
                <hr />
                <p>
                  <img src={fakeData[0]?.imgUrl} height="60px" alt="" />{" "}
                  <span>
                    <FontAwesomeIcon icon={faHandPointRight} />
                    {fakeData[0]?.name}
                  </span>{" "}
                  <FontAwesomeIcon icon={faUserFriends} />- 2 Price:
                  {fakeData[0]?.price}$
                </p>
                <hr />
                <p>
                  <img src={showData[0]?.imgUrl} height="60px" alt="" />{" "}
                  <span>
                    <FontAwesomeIcon icon={faHandPointRight} />
                    {showData[0]?.name}
                  </span>{" "}
                  <FontAwesomeIcon icon={faUserFriends} />- 4 Price:
                  {fakeData[0]?.price}$
                </p>
              </div>
            )}
          </Col>
          <Col xs={12} sm={8}>
            <Map></Map>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Destination;
