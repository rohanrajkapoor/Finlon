import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

const slideData = [
  {
    image: '../../assets/images/backgrounds/slider-3-1.png',
    title: 'Personalized Credit Repair Services',
    text: 'Nullam vel nibh facilisis lectus fermentum ultrices quis non risus.',
  },
  {
    image: '../../assets/images/backgrounds/slider-3-2.png',
    title: 'Personalized Credit Repair Services',
    text: 'Nullam vel nibh facilisis lectus fermentum ultrices quis non risus.',
  },
];

function Sliderthree() {
  const carouselRef = useRef();

  const sliderOptionsTwo = {
    loop: true,
    items: 1,
    navText: ['', ''],
    margin: 0,
    dots: false,
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
  };

  return (
    <>
      <section className="slider-one slider-one--three">
        <Swiper
          ref={carouselRef}
          // className="thm-owl__carousel thm-owl__carousel--custom-nav owl-carousel owl-theme owl-dot-style-one"
          data-owl-nav-prev=".slider-one__carousel__btn__left"
          data-owl-nav-next=".slider-one__carousel__btn__right"
          {...sliderOptionsTwo}
        >
          {slideData.map((slide, index) => (
            <div className="item" key={index}>
              <SwiperSlide className="slider-one__item">
                <div className="slider-one__image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <h2 className="slider-one__title">{slide.title}</h2>
                      <p className="slider-one__text">{slide.text}</p>
                      <div className="slider-one__btns">
                        <Link to="/creditrepair" className="thm-btn">
                          Let’s Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <div className="slider-one__carousel__btn">
          <button className="slider-one__carousel__btn__left" onClick={() => carouselRef.current.next()}>
            <i className="fa fa-angle-left"></i>
          </button>
          <button className="slider-one__carousel__btn__right" onClick={() => carouselRef.current.prev()}>
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default Sliderthree;
