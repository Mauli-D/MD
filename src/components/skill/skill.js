import React from 'react';

const Skill = props => {
  return (
    <section className="contentsection text-white" id="skills">
      <div className="contentsection-heading text-center">
        <h1 className="text-secondary text-uppercase mb-0">Skills</h1>
        <h4>I'm a web developer and here's what I can do</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto mb-4">
            <div className="wrap text-uppercase">
              <div className="bar cf" data-percent="90%"><span className="label">html</span></div>
              <div className="bar cf" data-percent="90%"><span className="label">css</span></div>
              <div className="bar cf" data-percent="80%"><span className="label">JavaScript</span></div>
              <div className="bar cf" data-percent="60%"><span className="label">reactjs</span></div>
              <div className="bar cf" data-percent="60%"><span className="label">angularjs</span></div>
              <div className="bar cf" data-percent="55%"><span className="label">git</span></div>
              <div className="bar cf" data-percent="50%"><span className="label">ruby on rails</span></div>
              <div className="bar cf" data-percent="80%"><span className="label">Microsoft Suites</span></div>
            </div>
          </div>
          <div className="col-lg-6 mx-auto">
            <div className="row mb-4">
              <div className="col-5 mx-auto">
                <span className="hex mx-auto mb-3">
                  <i className="icon-multi-task"></i>
                </span>
                <h4 className="pt-2">Multi-tasker</h4>
              </div>
              <div className="col-5 mx-auto">
                <span className="hex mx-auto mb-3">
                  <i className="icon-organized"></i>
                </span>
                  <h4 className="pt-2">Organized</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-5 mx-auto">
                <span className="hex mx-auto mb-3">
                  <i className="icon-creative"></i>
                </span>
                  <h4 className="pt-2">Creative</h4>
              </div>
              <div className="col-5 mx-auto">
                <span className="hex mx-auto mb-3">
                  <i className="icon-quick-lerner"></i>
                </span>
                  <h4 className="pt-2">Quick Learner</h4>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Skill;