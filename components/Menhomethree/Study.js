import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import BGCase11 from '../../assets/images/case/case-1-1.png';
import BGCase12 from '../../assets/images/case/case-1-2.png';
import BGCase13 from '../../assets/images/case/case-1-3.png';
import BGCase14 from '../../assets/images/case/case-1-4.png';

const Study = () => {
    const caseStudies = [
        {
            image: BGCase11,
            title: 'Personal banking',
            category: 'Finance',
        },
        {
            image: BGCase12,
            title: 'Business planning',
            category: 'Finance',
        },
        {
            image: BGCase13,
            title: 'Meger & acquistion',
            category: 'Finance',
        },
        {
            image: BGCase14,
            title: 'Business tie-ups',
            category: 'Finance',
        },
    ];

    const sliderFeatureOptions = {
        loop: true,
        items: 1,
        navText: [
            "<span className='slider-one__carousel__btn__left'></span>",
            "<span className='slider-one__carousel__btn__left'></span>",
        ],
        margin: 30,
        dots: true,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        autoplay: true,
        responsive: {
            0: {
                margin: 0,
                items: 1,
            },
            576: {
                margin: 30,
                items: 1,
            },
            768: {
                margin: 30,
                items: 2,
            },
            992: {
                margin: 30,
                items: 3,
            },
            1200: {
                margin: 30,
                items: 4,
            },
        },
    };

    return (
        <>
            <section className="case-one pb-120">
                <div className="container-fluid">
                    <div className="block-title text-center">
                        <p className="block-title__tagline">case study</p>
                        <h2 className="block-title__title">Discover our featured <br /> work studies</h2>
                    </div>
                    <div className="case-one__carousel">
                        <Swiper 
                        // className="thm-owl__carousel owl-carousel owl-theme owl-dot-style-one" 
                        {...sliderFeatureOptions}>
                            {caseStudies.map((caseStudy, index) => (
                                <SwiperSlide className="item" key={index}>
                                    <div className="case-card-one">
                                        <Link to="/servicedetails" className="case-card-one__link">
                                            <i className="fa fa-plus"></i>
                                        </Link>
                                        <div className="case-card-one__image" style={{ backgroundImage: `url(${caseStudy.image})` }}></div>
                                        <div className="case-card-one__content">
                                            <h3 className="case-card-one__title">
                                                <Link to="#">{caseStudy.title}</Link>
                                            </h3>
                                            <p className="case-card-one__text">{caseStudy.category}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Study;
