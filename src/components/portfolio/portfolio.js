import React from 'react';

const Portfolio = props => {
  return (
    <section className="contentsection bg-light text-center" id="portfolio">
      <div className="contentsection-heading">
        <h1 className="text-uppercase mb-3">Projects</h1>
      </div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="portfolio-item">
              <img className="img-fluid" src="img/portfolio.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="portfolio-item">
              <img className="img-fluid" src="img/portfolio-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;