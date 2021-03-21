import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser]}
      className="App"
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog />
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>

          <PrivateRoute exact path="/destination/:ticketType">
            <Destination />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
