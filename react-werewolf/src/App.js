import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
      <div className="App">
        <form>
          <div className="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username-field"
              placeholder="Enter Username"
              required
            ></input>
          </div>
        </form>
        <button type="submit" class="username-btn">
          Enter
        </button>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
