import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import a1 from "../asset/a1.png";
import back from "../asset/a1-back.jpg";
import nyn from "../asset/nyn.jpg";
import { Avatar } from "@material-ui/core";

const title = {
  margin: "5px",
  letterSpacing: "2px",
  fontSize: "25px",
  color: "rgb(0, 51, 102)",
};
const subtitle = {
  fontSize: "50px",
  fontWeight: "bold",
  margin: "5px",
  color: " rgb(0, 51, 102)",
};
const text = {
  hegiht: "100px",
  width: "500px",
};

const img = {
  hegiht: "100px",
  width: "500px",
  backgroundImage: `url(${back})`,
};
const classes = {
  width: "70px",
  height: "60px",
};
const name = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "rgb(0, 51, 102)",
  marginBottom: "0px",
  position: "absoulte",
};
const course = {
  fontSize: ".9rem",
  fontWeight: "bold",
  color: "rgb(0, 51, 102)",
};
const Alumin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm-6>
            <Row style={title}>Happy Student</Row>
            <Row style={(title, subtitle)}>Alumin Speak</Row>
            <Row>
              <Col>
                <Carousel>
                  <Carousel.Item style={text}>
                    {/* <img className="d-block w-100" src={s1} alt="First slide" /> */}
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis
                      interdum.Creative Design & Multimedia Institute(CDMI) is a
                      reputed training institute in Surat for web design, Game
                      design,Mobile App Development, Game Development ,Video
                      Editing & All types of IT Courses with 7 years of
                      full-fledged, result-oriented training experience. We
                      stepped in the market in 2014 with the goal to help
                      students, working professionals and other interested
                      candidates get that dream job or open that desired
                      freelance business in some of the most popular Computer
                    </p>
                    <p>
                      <Avatar alt="Remy Sharp" src={nyn} style={classes} />
                    </p>
                    <p style={name}>Nayan Bhakhar</p>
                    <p style={course}>React JS Developer</p>
                  </Carousel.Item>
                  <Carousel.Item style={text}>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Creative Design & Multimedia Institute(CDMI) is a
                      reputed training institute in Surat for web design, Game
                      design,Mobile App Development, Game Development ,Video
                      Editing & All types of IT Courses with 7 years of
                      full-fledged, result-oriented training experience. We
                      stepped in the market in 2014 with the goal to help
                      students, working professionals and other interested
                      candidates get that dream job or open that desired
                      freelance business in some of the most popular Computer
                    </p>
                    <p>
                      <Avatar alt="Remy Sharp" src={nyn} style={classes} />
                    </p>
                    <p style={name}>Nayan Bhakhar</p>
                    <p style={course}>React JS Developer</p>
                  </Carousel.Item>
                  <Carousel.Item style={text}>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur. Creative Design & Multimedia Institute(CDMI)
                      is a reputed training institute in Surat for web design,
                      Game design,Mobile App Development, Game Development
                      ,Video Editing & All types of IT Courses with 7 years of
                      full-fledged, result-oriented training experience. We
                      stepped in the market in 2014 with the goal to help
                      students, working professionals and other interested
                      candidates get that dream job or open that desired
                      freelance business in some of the most popular ComputerS
                    </p>
                    <p>
                      <Avatar alt="Remy Sharp" src={nyn} style={classes} />
                    </p>
                    <p style={name}>Nayan Bhakhar</p>
                    <p style={course}>React JS Developer</p>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Col>
          <Col sm-6>
            <img src={a1} style={img} alt="a1"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Alumin;
