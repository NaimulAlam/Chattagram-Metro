import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/destination">
            
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <p>Basic React router, Bootstrap and firebase install done</p>
      <p>
        need to setup route, bootstrap, firebase, firebase deploy then will
        start my project
      </p>
    </div>
  );
}

export default App;
