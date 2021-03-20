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

  const handleResponse =(res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
        handleResponse(res, true);
    });
  };

  const handleSubmit = (e) => {
    // console.log(user.email, user.password);
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
        console.log(res);
      });
    }
    e.preventDefault();
  };

  const handleBlur = (e) => {
    // console.log(e.target.name, e.target.value);
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log('email: '+ isFieldValid);
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
    <div className="App">
      <h3>This is Fire-Auth11</h3>
      {
        //condition ? showAfter : showBefore
        user.isSignedIn ? (
          <button onClick={signOut}>Google Sign out</button>
        ) : (
          <button onClick={googleSignIn}> Google Sign in</button>
        )
      }
      <br />
      <button onClick={fbSignIn}>Sign in Using Facebook</button>

      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name} </p>
          <p>Your Email: {user.email} </p>
          <img src={user.photo} alt="" />
        </div>
      )}

      <h1>Our Own Authentication</h1>
      {/* <p>Name: {user.name}</p>
        <p>Email: {user.email} </p>
        <p>Password: {user.password} </p> */}
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
    </div>
  );
}

export default Login;
