import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import c1 from "../asset/c1.mp4";
import c2 from "../asset/c2.mp4";
import c3 from "../asset/c3.mp4";
import c4 from "../asset/c4.mp4";
import c5 from "../asset/c5.mp4";
import c6 from "../asset/c6.mp4";
import star from "../asset/star.png";

const container = {
  marginTop: "60px",
};
const img = {
  height: "100px",
  width: "100px",
  marginRight: "10px",
};
const btn = {
  backgroundColor: "#003366",
  color: "white",
  borderColor: "#003366",
  outline: "none",
};
const col = {
  color: "black",
  fontSize: "30px",
  marginBottom: "3rem",
  textTransform: "upperCase",
  wordSpacing: "1px",
  fontFamily: "Rubik, sans-serif",
  textAlign: "center",
  fontWeight: "bold",
};

const Cards = () => {
  return (
    <>
      <Container style={container}>
        <Row>
          <Col style={col}>OFFERED COURSES</Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "5px" }}>
            <Card style={{ width: "18rem", marginBottom: "60px" }}>
              <video className="videoTag" autoPlay loop muted>
                <source src={c1} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>Multimedia Courses</Card.Title>
                <Card.Text>
                  <img src={star} alt="star" style={img} />
                  <Button variant="primary" style={btn}>
                    know more...
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <video className="videoTag" autoPlay loop muted>
                <source src={c2} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>UI/UX & Graphics Design</Card.Title>
                <Card.Text>
                  <img src={star} alt="star" style={img} />
                  <Button variant="primary" style={btn}>
                    know more...
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <video className="videoTag" autoPlay loop muted>
                <source src={c3} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>Programming IT</Card.Title>
                <Card.Text>
                  <img src={star} alt="star" style={img} />
                  <Button variant="primary" style={btn}>
                    know more...
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "5px" }}>
            <Card style={{ width: "18rem" }}>
              <video className="videoTag" autoPlay loop muted>
                <source src={c4} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>Trendy Courses</Card.Title>
                <Card.Text>
                  <img src={star} alt="star" style={img} />
                  <Button variant="primary" style={btn}>
                    know more...
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <video className="videoTag" autoPlay loop muted>
                <source src={c5} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>Civil-Mech. Engineering</Card.Title>
                <Card.Text>
                  <img src={star} alt="star" style={img} />
                  <Button variant="primary" style={btn}>
                    know more...
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <video className="videoTag" autoPlay loop muted>
                <source src={c6} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>Business Development</Card.Title>
                <Card.Text>
                  <img src={star} alt="star" style={img} />
                  <Button style={btn}>know more...</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
