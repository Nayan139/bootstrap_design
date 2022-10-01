import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const subHeading = {
  wordSpacing: "5px",
  letterSpacing: "1px",
  fontWeight: "bold",
};
const title = {
  marginBottom: "12px",
  marginTop: "40px",
  fontWeight: "bold",
  fontSize: "30px",
};
const bsJumbotron = {
  border: "2px",
  borderStyle: "solid",
  borderColor: "#3003366",
  borderRediusRight: "2rem",
  borderRadius: "0 250px 250px 0",
};

const row = {
  margin: "60px",
  marginLeft: "0px",
  // padding: "5px",
};

const btn = {
  backgroundColor: "#003366",
  padding: "8px",
  width: "200px",
  height: "50px",
};

const Response = () => {
  return (
    <>
      <Row style={row}>
        <Col sm="6" style={bsJumbotron}>
          <div>
            <p style={title}>ABOUT US</p>
            <p style={subHeading}>
              IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!
            </p>
            <p>
              Creative Design & Multimedia Institute(CDMI) is a reputed training
              institute in Surat for web design, Game design,Mobile App
              Development, Game Development ,Video Editing & All types of IT
              Courses with 7 years of full-fledged, result-oriented training
              experience. We stepped in the market in 2014 with the goal to help
              students, working professionals and other interested candidates
              get that dream job or open that desired freelance business in some
              of the most popular Computer / IT fields. Our aim is to ease the
              hiring process for businesses and organizations by providing
              work-ready professionals who can contribute greatly to their
              success. Since then, we have worked hard to achieve this goal and
              dedicated our time and resources to train students extensively.
            </p>
            <p>
              <Button style={btn}>Enroll Now...</Button>
            </p>
          </div>
        </Col>
        <Col sm-6>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/Vnap7ADkQKA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Response;
