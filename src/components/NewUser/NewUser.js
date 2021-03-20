import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./NewUser.css";
import { Col, Container, Row } from "react-bootstrap";

const NewUser = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = (data) => {
    console.log("form submitted", data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              defaultValue={loggedInUser.name}
              ref={register({ required: true })}
              placeholder="Your Name"
            />
            {errors.name && <span className="error">Name is required</span>}

            <input
              name="email"
              defaultValue={loggedInUser.email}
              ref={register({ required: true })}
              placeholder="Your Email"
            />
            {errors.email && <span className="error">Email is required</span>}

            <input
              name="Password"
              ref={register({ required: true })}
              placeholder="Password"
            />
            {errors.Password && (
              <span className="error">Password is required</span>
            )}

            <input
              name="ConfirmPassword"
              ref={register({ required: true })}
              placeholder="Confirm Password"
            />
            {errors.ConfirmPassword && (
              <span className="error">Confirm Password Number is required</span>
            )}

            <input type="submit" />
          </form>
        </Col>
      </Row>
      <Row>
      {/* <div className="App">
      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name} </p>
          <p>Your Email: {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      )}
      <br />
      <input
        type="checkbox"
        onChange={() => setNewUser(!newUser)}
        name="newUser"
        id=""
      />
      <label htmlFor="newUser"> New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && (
          <input
            type="text"
            onBlur={handleBlur}
            name="name"
            placeholder="Your name"
          />
        )}
        <br />
        <input
          type="text"
          onBlur={handleBlur}
          name="email"
          placeholder="Your email address"
          required
        />
        <br />
        <input
          type="password"
          onBlur={handleBlur}
          name="password"
          id=""
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value={newUser ? "Sign up" : "Sign in"} />
      </form>
      <p style={{ color: "red" }}>{user.error} </p>
      {user.success && (
        <p style={{ color: "green" }}>
          {" "}
          User {newUser ? "Created" : "Logged In"} Successfully.
        </p>
      )}
      </div> */}
      </Row>
    </Container>
  );
};

export default NewUser;
