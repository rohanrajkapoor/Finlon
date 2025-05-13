import BGSLI1 from '../../assets/images/backgrounds/slider-2-1.png'
import BGSLI2 from '../../assets/images/backgrounds/slider-2-2.png'
import { Link } from 'react-router-dom'
import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


function Slidertwo() {

    const carouselRef = useRef()
    
    const sliderOptionsOne = {
        loop: true,
        items: 1,
        navText: ["", ""],
        margin: 0,
        dots: false,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false
    }


  return (
    <>
        <section className="slider-one slider-one--two">
            <Swiper  ref={carouselRef} data-owl-nav-prev=".slider-one__carousel__btn__left" data-owl-nav-next=".slider-one__carousel__btn__right"  {...sliderOptionsOne}  >
                <SwiperSlide className="item">
                    <div className="slider-one__item">
                        <div className="slider-one__image" style={{ backgroundImage: `url(${BGSLI1})`}}>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p className="slider-one__tagline">Simple & Secure</p>
                                    <h2 className="slider-one__title">Quick Loan
                                        For <span>Everyone</span></h2>
                                    <p className="slider-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis
                                        non risus.</p>
                                    <div className="slider-one__btns">
                                        <Link to="/applynow" className="thm-btn thm-btn--dark-hover">Apply For Loan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="item">
                    <div className="slider-one__item">
                        <div className="slider-one__image" style={{ backgroundImage: `url(${BGSLI2})`}}>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <p className="slider-one__tagline">Simple & Secure</p>
                                    <h2 className="slider-one__title">Quick Loan
                                        For <span>Everyone</span></h2>
                                    <p className="slider-one__text">Nullam vel nibh facilisis lectus fermentum ultrices quis
                                        non risus.</p>
                                    <div className="slider-one__btns">
                                        <Link to="/applynow" className="thm-btn thm-btn--dark-hover">Apply For Loan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="slider-one__carousel__btn">
                <button className="slider-one__carousel__btn__left" onClick={()=>carouselRef.current.next()}>
                    <i className="fa fa-angle-left"></i>
                </button>
                <button className="slider-one__carousel__btn__right" onClick={()=>carouselRef.current.prev()}>
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
        </section>
    </>
  )
}

export default Slidertwo