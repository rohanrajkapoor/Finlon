import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


function Testimonials() {

    const sliderOptions = {
        loop: true,
        items: 2,
        navText: ["<span className=\"fa-solid fa-angle-left\"></span>", "<span className=\"fa-solid fa-angle-right\"></span>"],
        margin: 0,
        dots: false,
        nav: false,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: false
    }

    return (
        <>
            <section className="testimonials-two pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="block-title text-left">
                                <p className="block-title__tagline">our testimonials</p>
                                <h2 className="block-title__title">What they’re talking about company</h2>
                            </div>

                            <div className="testimonials-two__btn">
                                <button className="testimonials-two__btn__left">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                                <button className="testimonials-two__btn__right">
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="testimonials-two__carousel">
                                <Swiper
                                //  className="thm-owl__carousel thm-owl__carousel--custom-nav owl-carousel owl-theme owl-dot-style-one" 
                                data-owl-nav-prev=".testimonials-two__btn__left" data-owl-nav-next=".testimonials-two__btn__right"
                                 {...sliderOptions}
                                 >

                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-1.png" alt="Delia Riley" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-2.png" alt="Essie Perez" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-3.png" alt="Dustin Dunn" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-1.png" alt="Delia Riley" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-2.png" alt="Essie Perez" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-3.png" alt="Dustin Dunn" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-1.png" alt="Delia Riley" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Delia Riley</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-2.png" alt="Essie Perez" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Essie Perez</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <div className="testimonial-card">
                                            <div className="testimonial-card__info">
                                                <div className="testimonial-card__image">
                                                    <img src="assets/images/resources/testi-1-3.png" alt="Dustin Dunn" />
                                                </div>
                                                <div className="testimonial-card__meta">
                                                    <div className="testimonial-card__stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <h3 className="testimonial-card__name">Dustin Dunn</h3>
                                                    <p className="testimonial-card__designation">Finance Manager</p>
                                                </div>
                                            </div>
                                            <span className="testimonial-card__line"></span>
                                            <div className="testimonial-card__text">
                                                <p>I loved the customer service you guys provided me. That was very nice and patient with questions I had. I
                                                    would really like definitely come back here. Thank you for yours service.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials