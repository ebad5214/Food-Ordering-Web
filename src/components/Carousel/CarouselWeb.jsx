import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";


import './CarouselWeb.css'

const CarouselWeb = () => {
  return (
    <Fragment>
      <Carousel className="styl" fade = {true}>
        <Carousel.Item interval={7000}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/1/AmazonStores/A21TJRUUN4KGV/48c5db04f4e14501300d125108955105.w3000.h800._CR0%2C0%2C3000%2C800_SX1500_.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img
            className="d-block w-100"
            src="https://www.asiantour-myanmar.com/media/cache/d2/fa/d2fabd611009c7aeb262d437fcaf3f3f.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.polymerpkg.com/wp-content/uploads/cheese-honey-sauces-2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default CarouselWeb;
