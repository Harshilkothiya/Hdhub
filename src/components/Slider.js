import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";
import imageData from "../Data/imageData";

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    loop: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  let links = imageData.map((image) => {
    return image.images;
  });

  links = links.slice(0, 20);
  return (
    <div className="container">
      <Slider {...settings}>
        {links.map((img) => {
          return (
            <div className="parts">
              <img
                src={img}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
