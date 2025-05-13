import React from 'react'

function Map() {
    return (
        <>
            <section className="contact-info-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="contact-info-one__item">
                                <div className="contact-info-one__icon">
                                    <i className="icon-telephone"></i>
                                </div>
                                <div className="contact-info-one__content">
                                    <p className="contact-info-one__text">Have any question?</p>
                                    <a className="contact-info-one__link" href="tel:+3-(856)000-9850">+3-(856) 000-9850</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="contact-info-one__item">
                                <div className="contact-info-one__icon">
                                    <i className="icon-email"></i>
                                </div>
                                <div className="contact-info-one__content">
                                    <p className="contact-info-one__text">Write us email</p>
                                    <a className="contact-info-one__link" href="mailto:needhelp@company.com">needhelp@company.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="contact-info-one__item">
                                <div className="contact-info-one__icon">
                                    <i className="icon-pin"></i>
                                </div>
                                <div className="contact-info-one__content">
                                    <p className="contact-info-one__text">Visit anytime</p>
                                    <a className="contact-info-one__link" href="#">88 Road Broklyn New York</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Map