import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const container = {
  marginTop: "50px",
};
const col = {
  marginBottom: "30px",
  // marginTop: "20px",
};
const p = {
  textAlign: "center",
  color: "#003366",
};
const h3 = {
  textAlign: "center",
  textTransform: "upperCase",
  marginBottom: "60px",
  fontWeight: "bold",
  fontFamily: "Rubik, sans-serif",
  color: "#003366",
};
const card = {
  margin: "20px",
};
const circle = {
  hegiht: "300px",
  width: "100px",
  background: "red",
  borderRadius: "50%",
};

const round = {
  marginLeft: "50px",
  hegiht: "300px",
};
const title = {
  textAlign: "center",
  fontWeight: "500",
  fontFamily: "'Roboto', sans-serif;",
};
const desc = {
  textAlign: "center",

  fontFamily: "'Roboto', sans-serif;",
  letterSpacing: "1px",
};
const roundDiv = {
  backgroundColor: "#F6475F",
  height: "150px",
  width: "150px",
  margin: "auto",
  borderRadius: "50%",
};
const Difference = () => {
  return (
    <>
      <Container style={container}>
        <Row>
          <Col sm-12>
            <p style={p}>Read Our Difference</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 style={h3}>Why Choose Creative</h3>
          </Col>
        </Row>
        <Row>
          <Col style={col}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body style={card}>
                {/* <svg hegiht="70" width="100" style={round}>
                  <circle cx="50" cy="40" r="40" fill="#F6475F"></circle>
                </svg> */}
                <div style={roundDiv}></div>
                <Card.Title style={title}>
                  Industry Experts As Trainers
                </Card.Title>

                <Card.Text style={desc}>
                  Our trainers have 5+ years of industry experience coupled with
                  extensive research and analysis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={col}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body style={card}>
                <svg hegiht="70" width="100" style={round}>
                  <circle cx="50" cy="40" r="40" fill="#F6475F"></circle>
                </svg>

                <Card.Title style={title}>Latest Curriculum</Card.Title>

                <Card.Text style={desc}>
                  We Provides latest curriculum for all courses which designed
                  in such a way that Students will get full knowledge within a
                  short time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={col}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body style={card}>
                <svg hegiht="70" width="100" style={round}>
                  <circle cx="50" cy="40" r="40" fill="#F6475F"></circle>
                </svg>

                <Card.Title style={title}>Latest Technology</Card.Title>

                <Card.Text style={desc}>
                  We strive to let you have a solid foundational knowledge of
                  technologies shaping the IT World today. shaping the IT World
                  today.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col style={col}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body style={card}>
                <svg hegiht="70" width="100" style={round}>
                  <circle cx="50" cy="40" r="40" fill="#F6475F"></circle>
                </svg>

                <Card.Title style={title}>Interview Assistance</Card.Title>

                <Card.Text style={desc}>
                  At the end of each training,our training instructor will go
                  through the possible technical questions you may be asked.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={col}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body style={card}>
                <svg hegiht="70" width="100" style={round}>
                  <circle cx="50" cy="40" r="40" fill="#F6475F"></circle>
                </svg>

                <Card.Title style={title}>Free Upgradation</Card.Title>

                <Card.Text style={desc}>
                  We will be provided free upgradation for any newer version of
                  the course you have.We will be provided free upgradation .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={col}>
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body style={card}>
                <svg hegiht="70" width="100" style={round}>
                  <circle cx="50" cy="40" r="40" fill="#F6475F"></circle>
                </svg>

                <Card.Title style={title}>
                  Industry Experts As Trainers
                </Card.Title>

                <Card.Text style={desc}>
                  Our trainers have 5+ years of industry experience coupled with
                  extensive research and analysis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Difference;
