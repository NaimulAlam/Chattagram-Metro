import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import {
  createUserWithEmailAndPassword,
  handleFbSignIn,
  handleGoogleSignIn,
  handleSignOut,
  initializeLogin,
  signInWithEmailAndPassword,
} from "./LogingManager.js";

import "./Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  initializeLogin();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };



  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <Container className="App mt-5">
      <Row
        className="justify-content-md-center xs={2} md={4} lg={6}"
        bg="light"
      >
        <Col className="login-form" lg={12}>
            <Form className="locationCard m-2 p-3" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                onChange={() => setNewUser(!newUser)}
                name="newUser"
                id=""
              />
              <label htmlFor="newUser"> New User Sign Up</label>
              {newUser && (
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="name"
                  placeholder="Your name"
                  required
                />
              )}
              <input
                type="text"
                onBlur={handleBlur}
                name="email"
                placeholder="Your email address"
                required
              />
              <input
                type="password"
                onBlur={handleBlur}
                name="password"
                id=""
                placeholder="Password"
                required
              />
              {newUser && (
                <input
                  type="password"
                  onBlur={handleBlur}
                  name="password"
                  placeholder="Retype Password"
                  required
                />
              )}
              <input type="submit" value={newUser ? "Sign up" : "Sign in"} />
            </Form>
          </Col>
          <Col>
            <p style={{ color: "red" }}>{loggedInUser.error} </p>
            {loggedInUser.success && (
              <p style={{ color: "white" }}>
                {" "}
                User {newUser ? "Created" : "Logged In"} Successfully.
              </p>
            )}
          </Col>
      </Row>
      <p><hr class="solid"></hr></p>
      <Row >
        <Col lg={12} >
          {
            loggedInUser.isSignedIn ? (
              <Button className="m-2 my-2 py-3" variant="Warning" onClick={signOut}>
                <FontAwesomeIcon icon={faGoogle} />
                Google Sign out
              </Button>
            ) : (
              <Button
                className="m-2 py-3" variant="primary" onClick={googleSignIn}
              >
                <FontAwesomeIcon icon={faGoogle} /> Google Sign in
              </Button>
            )
          }
          </Col>
          <Col lg={12} >
          {loggedInUser.isSignedIn ?<Button className="mx-2 py-3" variant="primary" onClick={signOut}>
            <FontAwesomeIcon icon={faFacebookSquare} /> Facebook Sign out
          </Button>
          :<Button className="mx-2 py-3" variant="primary" onClick={fbSignIn}>
            <FontAwesomeIcon icon={faFacebookSquare} /> Facebook Sign in
          </Button>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
