import React, { Component } from "react";
import sparkdevLogo from "./../images/SparkDev.png";
class HomePage extends Component {
render() {
    return (
      <div className="App">
        <div className="header">
          <img
            src={sparkdevLogo}
            alt="sparkdev-logo"
            className="header-logo"
          ></img>
        </div>
        <div className="title-container">
          <h1 className="title">
          WEREWOLF
          </h1>
          <form className="username-form">
            <div className="form-control">
              <input
                type="text"
                name="username"
                id="username-field"
                placeholder="Enter Username"
                required
              ></input>
            </div>
          </form>
          <button type="submit" className="username-btn">
            Play
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;