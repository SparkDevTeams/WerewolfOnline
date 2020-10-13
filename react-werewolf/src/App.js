import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/homepage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
        <div className="App" style={{ margin: 0, padding: 0 }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          </div>
      </Router>
 );}
}

export default App;
