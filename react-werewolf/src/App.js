import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/homepage";
import WaitingRoom from "./containers/waitingroom";
import Game from "./containers/game";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }


  render() {
    return (
      <Router>
        <div className="App" style={{ margin: 0, padding: 0 }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/waitingroom" component={WaitingRoom}  />
            <Route exact path="/game" component={Game}  /> 
          </Switch>
          </div>
      </Router>
 );}
}

export default App;
