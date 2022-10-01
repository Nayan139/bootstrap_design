import React from "react";
import { Carousel } from "react-bootstrap";
import jpeg1 from "../asset/jpeg1.jpg";

const Slider = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={jpeg1} alt="First slide" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100" src={s2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s4} alt="Third slide" />
        </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default Slider;
