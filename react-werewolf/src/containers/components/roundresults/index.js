import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import alphawerewolf from "./../../images/Alfa Black Werewolf icon.png";
import fool from "./../../images/Fool.png";
import villager from "./../../images/Villager.png";

function RoundResults(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{background: "#262626"}}
      >
        <Modal.Header 
        style={{ 'font-family': "Henny Penny", color: "#262626"}}
        closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Round Results
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ 'font-family': "Henny Penny", color: "#262626"}}>
        <img 
                        src={villager}
                        style={{ display: "block", width: "8rem",height: "8rem", 'margin-left': "auto", 'margin-right': "auto"}}
                        ></img>
          <p style={{  'text-align': "center"}}>
            The player with username: test2 was voted out. This player had role: Villager.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ 'background-color': "#bcbcbc", border: "1px solid transparent", padding: "0.1875rem 0.375rem", 'border-radius': "8px"}}
           onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

   export default RoundResults;