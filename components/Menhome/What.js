import React from 'react';
import { Link } from 'react-router-dom';

function What() {
  const services = [
    {
      imageSrc: 'assets/images/services/services-1-1.png',
      title: 'Auto Car Loan',
      text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
      link: '/servicedetails'
    },
    {
      imageSrc: 'assets/images/services/services-1-2.png',
      title: 'Wedding Loan',
      text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
      link: '/servicedetails'
    },
    {
      imageSrc: 'assets/images/services/services-1-3.png',
      title: 'Property Loan',
      text: 'Car Loan provide low interest many variations of passages of lorem ipsum have some.',
      link: '/servicedetails'
    }
  ];

  return (
    <>
      <section className="service-one pt-120 pb-140">
        <img src="assets/images/shapes/service-h-1.png" className="service-one__icon-1" alt="" />
        <img src="assets/images/shapes/service-h-2.png" className="service-one__icon-2" alt="" />
        <img src="assets/images/shapes/service-h-3.png" className="service-one__icon-3" alt="" />
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">What We’re Offering</p>
            <h2 className="block-title__title">
              We provide best services <br /> for your loans{' '}
            </h2>
          </div>
          <div className="row row-gutter-y-50">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-12 col-sm-12" key={index}>
                <div className="service-card">
                  <div className="service-card__image">
                    <img src={service.imageSrc} alt={service.title} />
                    <Link to={service.link}></Link>
                  </div>
                  <div className="service-card__content">
                    <div className="service-card__content__inner">
                      <div className="service-card__icon">
                        <i className="icon-car"></i>
                      </div>
                      <h3 className="service-card__title">
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                      <p className="service-card__text">{service.text}</p>
                      <Link to={service.link} className="service-card__link">
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default What;
