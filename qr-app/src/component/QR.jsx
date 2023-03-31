import React from "react";
import "./qr.css";
import img from "../img/image-qr-code.png";
import Card from "react-bootstrap/Card";
export default function QR() {
  return (
    <div>
      <Card className="card">
        <Card.Img variant="top" src={img} className="img" />
        <Card.Body>
          <Card.Title className="title">
            mprove your front-end skills by building projects
          </Card.Title>
          <Card.Text className="details">
            Scan the QR code to // visit Frontend Mentor and take your coding
            skills to the next level
          </Card.Text>
        </Card.Body>
      </Card>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Aman Gairola</a>.
      </div>
    </div>
  );
}

//  <div>
//       <div className="qrimg">
//         <img src={img} alt="qriimg" className="qr" />
//       </div>
//       <div className="details">
//         Improve your front-end skills by building projects Scan the QR code to
//         visit Frontend Mentor and take your coding skills to the next level
//       </div>

//       <div class="attribution">
//         Challenge by{" "}
//         <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
//           Frontend Mentor
//         </a>
//         . Coded by <a href="#">Your Name Here</a>.
//       </div>
//     </div>
