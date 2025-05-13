import React from 'react';
import { Link } from 'react-router-dom';

function Offer() {
  const blogs = [
    {
      date: '05',
      month: 'Mar',
      image: 'assets/images/blog/blog-1-1.png',
      link: '#',
      author: 'Admin',
      comments: '2 Comments',
      title: 'Which growth strategies you should adopt',
      text: 'Duis aute irure dolor lipsum simply free text the local markets.'
    },
    {
      date: '05',
      month: 'Mar',
      image: 'assets/images/blog/blog-1-2.png',
      link: '#',
      author: 'Admin',
      comments: '2 Comments',
      title: 'Which growth strategies you should adopt',
      text: 'Duis aute irure dolor lipsum simply free text the local markets.'
    },
    {
      date: '05',
      month: 'Mar',
      image: 'assets/images/blog/blog-1-3.png',
      link: '#',
      author: 'Admin',
      comments: '2 Comments',
      title: 'Which growth strategies you should adopt',
      text: 'Duis aute irure dolor lipsum simply free text the local markets.'
    }
  ];

  return (
    <>
      <section className="blog-one pt-120 pb-120">
        <div className="container">
          <div className="block-title text-center">
            <p className="block-title__tagline">What We’re Offering</p>
            <h2 className="block-title__title">
              Our latest news updates <br /> & articles
            </h2>
          </div>
          <div className="row row-gutter-y-30">
            {blogs.map((blog, index) => (
              <div className="col-lg-4 col-md-12 col-sm-12" key={index}>
                <div className="blog-card">
                  <div className="blog-card__image">
                    <div className="blog-card__date">
                      <span>{blog.date}</span> {blog.month}
                    </div>
                    <img src={blog.image} alt={blog.title} />
                    <Link to={blog.link}></Link>
                  </div>
                  <div className="blog-card__content">
                    <div className="blog-card__meta">
                      <Link to="#">
                        <i className="far fa-user-circle"></i> by {blog.author}
                      </Link>
                      <Link to="#">
                        <i className="far fa-comments"></i> {blog.comments}
                      </Link>
                    </div>
                    <h3 className="blog-card__title">
                      <Link to={blog.link}>{blog.title}</Link>
                    </h3>
                    <p className="blog-card__text">{blog.text}</p>
                    <Link to={blog.link} className="blog-card__link">
                      Read More
                    </Link>
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

export default Offer;
