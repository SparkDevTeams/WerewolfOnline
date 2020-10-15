import React, { Component } from "react";
import sparkdevLogo from "./../images/SparkDev.png";
import werewolfBackground from "./../images/warewolf.jpg";
import villagerBackground from "./../images/Villager.png";
class HomePage extends Component {
render() {
    return (
      <div className="App">
       <div className="main-container">
        <div className="background-container">
            <div className="left">
                <img src={werewolfBackground} className = "image werewolf-background" alt="werewolf-img"></img>
            </div>
            <div className="right">
                <img src={villagerBackground} className = "image villager-background" alt="village-img"></img>
            </div>
        </div>
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
      </div>
    );
  }
}

export default HomePage;