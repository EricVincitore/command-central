import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Homepage from "./pages/Homepage";
import Metagame from "./pages/Metagame";
import CardDatabase from "./pages/Database";
import Resources from "./pages/Resources"
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/metagame" component={Metagame} />
          <Route exact path="/cardDatabase" component={CardDatabase} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/logout" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;