import React from 'react';

const Resume = props => {
  return (
    <section className="contentsection bg-light text-center" id="experience">
      <div className="contentsection-heading">
        <h1 className="text-uppercase mb-3">Work Experience</h1>
      </div>
      <div className="container">
        <div className="row">
          <ul className="col-lg-7 mx-auto text-white text-justify">
            <li className="bg-dark mb-4 p-3">
              <div>
                <div className="row pt-3">
                  <div className="col-6 mb-2 mx-auto">
                    <h4>Software developer</h4>
                  </div>
                  <div className="col-6 mb-2 mx-auto text-right">
                    <div className="date">
                      <i className="icon-calendar"></i> September 2016 - August 2017
                    </div>
                  </div>
                </div>
                <hr className="hr-main" />
                <h4><i className="icon-briefcase"></i> Kalp Corporate</h4>
                <div>
                  <p> <i className="icon-pin"></i>
                    <i>Used HTML5, CSS, AngularJs, EmberJs and Git for API-based business website advancement.</i>
                  </p>
                  <p> <i className="icon-pin"></i>
                    <i>Help all individuals from the relegated office with everyday tasks and uncommon ventures. </i>
                  </p>
                  <p> <i className="icon-pin"></i>
                    <i>Worked with a group of planners and designers to satisfy customers' needs.</i>
                  </p>
                  <p> <i className="icon-pin"></i>
                    <i>Provide essential degrees of exertion related to work requests.</i>
                  </p>
                  <p> <i className="icon-pin"></i>
                    <i>Communicate with area specialists, clients, and executives all through the product advancement lifecycle.</i>
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-dark mb-4 p-3">
              <div>
                <div className="row pt-3">
                  <div className="col-6 mb-2 mx-auto">
                    <h4>Intern Software Developer</h4>
                  </div>
                  <div className="col-6 mb-2 mx-auto text-right">
                    <div className="date">
                      <i className="icon-calendar"></i> July 2016 - September 2016
                    </div>
                  </div>
                </div>
                <hr className="hr-main" />
                <h4><i className="icon-briefcase"></i> Atharva System</h4>
                <div>
                  <p> <i className="icon-pin"></i>
                    <i>Participate in scheduled events and Complete intern Group project(s), other duties as assigned.</i>
                  </p>
                  <p> <i className="icon-pin"></i>
                    <i>Perform troubleshoot and execution examination of code and frameworks.</i>
                  </p>
                  <p> <i className="icon-pin"></i>
                    <i>Helped with backend development using Ruby on Rails, web development using HTML/CSS/JavaScript and database SQL.</i>
                  </p>
                  <p> <i className="icon-pin"></i>
                    <i>Strong passion demonstrated via energy levels, enthusiasm, creativity, and commitment.</i>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a className="btn btn-primary btn-xl" href="MaulikaDesai.pdf" target="_blank" download>Download Resume!</a>     
      </div>
    </section>
  );
};

export default Resume;