import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import instagram from "../asset/instagram.png";
import whatsapp from "../asset/whatsapp.png";
import linkedin from "../asset/linkedin.png";
import youtube from "../asset/youtube.png";

const row = {
  backgroundColor: "#003366",
  height: "50px",
};
const content = {
  color: "white",
  textAlign: "center",
  marginTop: "10px",
};
const img = {
  height: "20px",
  widtth: "20px",
  marginTop: "5px",
  marginLeft: "15px",
};

function Header() {
  return (
    <>
      <Container fluid>
        <Row style={row}>
          <Col sm="3" style={content}>
            info@cdmi.in
          </Col>
          <Col sm="5" style={content}>
            HAVE ANY QUESTION ? +91 73 8383 4030
          </Col>
          <Col sm="4" style={content}>
            <img src={instagram} style={img} alt="instagram"></img>
            <img src={whatsapp} style={img} alt="whatsapp"></img>
            <img src={linkedin} style={img} alt="linkedin"></img>
            <img src={youtube} style={img} alt="youtube"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
