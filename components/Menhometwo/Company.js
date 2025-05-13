import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Company() {
    const [ytShow, setytShow] = useState(false);

    return (
        <>
            <section className="about-five pt-120 pb-120">
                <div className="about-five__shape-1"></div>
                <div className="about-five__shape-2"></div>
                <div className="about-five__shape-3"></div>
                <div className="container">
                    <div className="row row-gutter-y-60">
                        <div className="col-lg-6">
                            <div className="about-five__image wow fadeInLeft" data-wow-duration="1500ms">
                                <img src="assets/images/resources/about-5-1.png" alt="" />
                                <div className="about-five__image__caption">
                                    <div className="about-five__image__caption__shape-1"></div>
                                    <div className="about-five__image__caption__shape-2"></div>
                                    <div className="about-five__image__caption__shape-3"></div>
                                    <h3 className="about-five__image__title">
                                        25<i>+</i>
                                    </h3>
                                    <p className="about-five__image__text">Years Experiecne</p>
                                </div>
                                <div className="about-five__image__floated">Finlon</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-five__content">
                                <div className="block-title text-left">
                                    <p className="block-title__tagline">About Company</p>
                                    <h2 className="block-title__title">Small business loans for daily expenses</h2>
                                </div>
                                <h3 className="about-five__subtitle">Duis irure dolor lipsum is simply free text available.</h3>
                                <p className="about-five__text">There are many variations of passages of lorem ipsum available the
                                    majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum
                                    is simply free text available.</p>
                                <div className="team-progress__item">
                                    <h4 className="team-progress__title">Investment Plan</h4>
                                    <div className="team-progress__bar">
                                        <div className="team-progress__bar__inner count-bar" data-percent="77%" style={{ width: '77%' }} >
                                            <div className="team-progress__bar__text count-text" >77%</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="team-progress__item">
                                    <h4 className="team-progress__title">Consulting Experience</h4>
                                    <div className="team-progress__bar">
                                        <div className="team-progress__bar__inner count-bar" data-percent="68%" style={{ width: '68%' }}>
                                            <div className="team-progress__bar__text count-text">68%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-gutter-y-30">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled ml-0 about-two__list">
                                            <li>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Nsectetur cing elit.
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Suspe ndisse suscipit sagittis leo.
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Entum estibulum digni posuere.
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Donec tristique ante dictum rhoncus.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-five__video">
                                            <img src="assets/images/resources/about-5-v-1.png" alt="" />
                                            <Link to="#" onClick={() => setytShow(true)} className="video-popup about-five__video__btn">
                                                <i className="fa fa-play"></i>
                                                <span className="ripple"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {ytShow &&
                <>
                    <div className="mfp-bg mfp-fade mfp-ready" style={{ height: '7368px', position: 'absolute' }}></div>
                    <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabindex="-1" style={{ top: '1561px', position: 'absolute', height: '310px' }}>
                        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                            <div className="mfp-content">
                                <div className="mfp-iframe-scaler">
                                    <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setytShow(false)}>×</button>
                                    <iframe className="mfp-iframe" src="//www.youtube.com/embed/m2b9ZTBlW2k?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
                                </div>
                            </div>
                            <div className="mfp-preloader">Loading...</div>
                        </div>
                    </div>
                </>}
        </>
    )
}

export default Company