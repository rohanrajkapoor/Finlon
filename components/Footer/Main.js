import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="main-footer">
            <div className="container">
                <div className="row row-gutter-y-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget footer-widget--about">
                            <Link to="/" className="footer-widget__logo">
                                <img src="assets/images/logo-light.png" alt="finlon" width="140" height="51" />
                            </Link>
                            <p className="footer-widget__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
                                habitasse platea dictumst.</p>
                            <ul className="list-unstyled footer-widget__info">
                                <li>
                                    <i className="icon-email"></i>
                                    <Link to="mailto:needhelp@finlon.com">needhelp@finlon.com</Link>
                                </li>
                                <li>
                                    <i className="icon-telephone"></i>
                                    <Link to="tel:926668880000">92 666 888 0000 </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget footer-widget--links">
                            <h3 className="footer-widget__title">
                                Explore
                            </h3>
                            <ul className="list-unstyled footer-widget__menu">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Our Services</Link></li>
                                <li><Link to="/news">Latest News</Link></li>
                                <li><Link to="/applynow">Apply for Loan</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget footer-widget--time">
                            <h3 className="footer-widget__title">
                                Timing
                            </h3>
                            <p className="footer-widget__text">
                                Mon Fri: 7:00am - 6:00pm <br/> Saturday: 9:00am - 5:00pm <br /> Sunday: Closed
                            </p>
                            <div className="footer-widget__social">
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-facebook"></i></Link>
                                <Link to="#"><i className="fab fa-pinterest"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget footer-widget--newsletter">
                            <h3 className="footer-widget__title">
                                Newsletter
                            </h3>
                            <form className="footer-widget__mailchimp">
                                <input type="email" placeholder="Email address" />
                                <p className="footer-widget__mailchimp__text">
                                    <i className="fa fa-check"></i>
                                    I agree to all your terms and policies
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bottom-footer">
            <div className="container">
                <p className="bottom-footer__text text-center">Copyright &copy; 2022 All Rights Reserved.</p>
                
            </div>
        </div>
    </>
  )
}

export default Footer