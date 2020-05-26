import React from 'react';

const Portfolio = props => {
  return (
    <section class="contentsection bg-light text-center" id="portfolio">
      <div class="contentsection-heading">
        <h1 class="text-uppercase mb-3">Projects</h1>
      </div>
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-6">
            <div class="portfolio-item">
              <img class="img-fluid" src="img/portfolio.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="portfolio-item">
              <img class="img-fluid" src="img/portfolio-1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;