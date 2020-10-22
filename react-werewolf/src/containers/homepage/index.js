import React, { useState } from "react";
import { Link } from "react-router-dom";
import sparkdevLogo from "./../images/SparkDev.png";
import werewolfBackground from "./../images/warewolf.jpg";
import villagerBackground from "./../images/Villager.png";

export default function Play() {


  const [username, setName] = useState('');
  const [room, setRoom] = useState('1');
  
    return (
      <div className="HomePage">
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
            <div className="form-control">
              <input
                type="text"
                name="username"
                id="username-field"
                placeholder="Enter Username"
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>
        
          <Link  onClick={e => (!username) ? e.preventDefault() : null} to={`/waitingroom?username=${username}&room=${room}`}>
          <button type="submit" className={'username-btn'}> Play</button>
          </Link>
        </div>
       </div>
       <div className="about-container">
         <h1 className="about-title">DEVELOPERS</h1>
        <div className="row">
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={werewolfBackground} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">developer</h3>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis libero id aliquet commodo. Aliquam interdum, dui eget dignissim vehicula.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('http://google.com', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
        </div>
       </div>
      </div>
    );
  }


