import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselComponent.css";
import Valheim from "./assets/valhem-image.png";
import Bioshock from "./assets/bioshock-image.png";
import Ticktock from "./assets/ticktock-image.png";
import Hitman from "./assets/hitman-image.png";
import Unravel from "./assets/unravel-image.png";

import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <AiOutlineLeftCircle className="left-arrow" />
      </button>
      <button onClick={() => next()}>
        <AiOutlineRightCircle className="right-arrow" />
      </button>
      {/* <button onClick={() => goToSlide(currentSlide + 1)}>
        Go to any slide
      </button> */}
    </div>
  );
};

const CarouselComponent = () => {
  return (
    <div className="carousel-div">
      <h3>Games On Sale</h3>
      <Carousel
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="card">
          <img src={Valheim} alt="" />
          <div className="card-info">
            <p className="name">Valheim</p>
            <p className="category">Action Games</p>
            <div className="price-div">
              <p className="price">$8.15</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Bioshock} alt="" />
          <div className="card-info">
            <p className="name">Bioshock</p>
            <p className="category">Action, RPG</p>
            <div className="price-div">
              <p className="percentage">-80%</p>
              <p className="discount">$50</p>
              <p className="price">$8.67</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Unravel} alt="" />
          <div className="card-info">
            <p className="name">Unravel Two</p>
            <p className="category">Adventure Games</p>
            <div className="price-div">
              <p className="price">$20.38</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Ticktock} alt="" />
          <div className="card-info">
            <p className="name">Tick Tock: A Tale for Two</p>
            <p className="category">Indie Games</p>
            <div className="price-div">
              <p className="percentage">-80%</p>
              <p className="discount">$3.47</p>
              <p className="price">$1.39</p>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={Hitman} alt="" />
          <div className="card-info">
            <p className="name">Hitman 3</p>
            <p className="category">Action Games</p>
            <div className="price-div">
              <p className="price">$23.99</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
