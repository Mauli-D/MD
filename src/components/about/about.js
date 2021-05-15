import React from 'react';

const About = props => {
  return (
    <section className="contentsection bg-light text-center" id="about">
      <div className="contentsection-heading ">
        <h1 className="text-uppercase mb-3">About Maulika</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h2 className="text-uppercase text-center font-weight-normal font-italic"> Who am I? </h2>
            <div className="text-justify lead mb-5">
              <p>I am ambitious and passionate programmer with more than 2 years of experience in software developement. I've completed a college diploma in computer programmer and bachelor's degree in computer engineering. I live in Toronto, Ontario, Canada.</p>
              <p>I’m constantly learning new technologies and other programming languages. Notable as a profoundly imaginative designer who can generally be trusted to think of another methodology. I'm looking for an opportunity use my aptitudes and information in powerful and remunerating corporate settings. I'm a highly organized and result-oriented person who can work well independently, however I'm at my best teaming up with others.</p>
            </div>
          </div>
          <div className="col-lg-6 mx-auto">
            <div className="aboutimg rounded-circle">
            </div>
            <div className="footer text-center">
              <div className="container">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/maulikadesai/">
                      <i className="icon-social-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="https://github.com/Mauli-D">
                      <i className="icon-social-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="https://www.facebook.com/maulika.desai.5">
                      <i className="icon-social-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;