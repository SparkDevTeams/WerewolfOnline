import React, { useState } from "react";
import { Link } from "react-router-dom";
import sparkdevLogo from "./../images/SparkDev.png";
import werewolfBackground from "./../images/warewolf.jpg";
import villagerBackground from "./../images/Villager.png";
import picDanay from "./../images/Danay.jpg";
import picGaby from  "./../images/Gaby.jpg";
import picKevin from  "./../images/Kevin.jpg";
import picZackary from  "./../images/Zackary.jpeg";
import picSamara from  "./../images/Samara.jpg";
import picMiguel from  "./../images/miguel.jpg";
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
            <img src={picDanay} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">Danay Fernandez</h3>
            <p className="about-info">My name is Danay Fernandez, I am currently a student at FIU pursuing a Dual Degree in Computer Science and Mathematics. As well as, a Masters of Science in Computer Science. I enjoy watching anime and being outdoors on my free time.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('https://www.linkedin.com/in/dfern99', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={picSamara} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">Samara Ruiz Sandoval</h3>
            <p className="about-info">My name is Samara Ruiz Sandoval, and I am currently a senior pursuing a bachelor in Computer Science. I work in the Analytics of Cyber Defense (ACyd) Lab at FIU, where I help professor Rahman to train a machine learning model to predict future behaviors in the American Power System (IEEE Bus System).</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('https://www.linkedin.com/in/samara-ruizsandoval/', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={picZackary} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">Zackary Wright</h3>
            <p className="about-info">Hello, I am Zackary Wright and I am a student pursuing a degree at FIU studying Computer Science. I am interested in problem-solving, tech, and sports.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('https://www.linkedin.com/in/zackary-wright/', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={picGaby} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">Gaby Yanes Perez</h3>
            <p className="about-info">My name is Gaby Yanes Perez and I'm currently a junior at FIU majoring in Computer Science. Through my involvement in Disability Tech, I helped implement an app that can improve data tracking methods in the ABA field. I enjoy listening to music, spending time with friends and family, and learning about computers.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('https://fiu.joinhandshake.com/users/15161563', '_blank');
              win.focus();
            }}>Handshake</button>
          </div>
         </div>
         
         <div className="column">
          <div className="about-card">
            <img src={picMiguel} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">Miguel De Jesus Tavares</h3>
            <p className="about-info">My name is Miguel De Jesus, I'm a student at FIU pursuing a Bachelor's degree in Computer Engineering. I spend my weekends working on robotics and gamedev.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('https://www.linkedin.com/in/mdeje022/', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
         <div className="column">
          <div className="about-card">
            <img src={picKevin} className = "about-img" alt="about-img"></img>
            <h3 className="about-name">Kevin Zheng</h3>
            <p className="about-info">My name is Kevin Zheng and I am currently a student at Florida International University pursuing a Bachelor's in Computer Science. I have a passion for software development and teaching mathematics. As an avid powerlifter, I coach individuals on the importance of strength training to overall health & fitness.</p>
            <button
              type="button"
              className = "about-btn"
              target={"_blank"}
              onClick={function openInNewTab(url) {
              var win = window.open('https://www.linkedin.com/in/kevin-zheng-4090401a6/', '_blank');
              win.focus();
            }}>LinkedIn</button>
          </div>
         </div>
     
        </div>
       </div>
      </div>
    );
  }


