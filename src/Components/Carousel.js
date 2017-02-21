import React, { Component } from 'react';
import Slider from 'react-slick';
import src from '../../Assets/carousel.jpg';

class Carousel extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      draggable: false,
      focusOnSelect: true,
      infinite: true,
      initialSlide: 1,  
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      vertical: false,
    };
    return (
      <div className='sliderWrapper'>
        <Slider {...settings}>
          <div><img src={src} /></div>
          <div><img src={src} /></div>
          <div><img src={src} /></div>
        </Slider>
      </div>
    );
  }
};

export default Carousel;