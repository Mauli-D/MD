import React from 'react';

const Skill = props => {
  return (
    <section class="contentsection text-white" id="skills">
      <div class="contentsection-heading text-center">
        <h1 class="text-secondary text-uppercase mb-0">Skills</h1>
        <h4>I'm a web developer and here's what I can do</h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto mb-4">
            <div class="wrap text-uppercase">
              <div class="bar cf" data-percent="90%"><span class="label">html</span></div>
              <div class="bar cf" data-percent="90%"><span class="label">css</span></div>
              <div class="bar cf" data-percent="80%"><span class="label">JavaScript</span></div>
              <div class="bar cf" data-percent="60%"><span class="label">reactjs</span></div>
              <div class="bar cf" data-percent="60%"><span class="label">angularjs</span></div>
              <div class="bar cf" data-percent="55%"><span class="label">git</span></div>
              <div class="bar cf" data-percent="50%"><span class="label">ruby on rails</span></div>
              <div class="bar cf" data-percent="80%"><span class="label">Microsoft Suites</span></div>
            </div>
          </div>
          <div class="col-lg-6 mx-auto">
            <div class="row mb-4">
              <div class="col-5 mx-auto">
                <span class="hex mx-auto mb-3">
                  <i class="icon-multi-task"></i>
                </span>
                <h4 class="pt-2">Multi-tasker</h4>
              </div>
              <div class="col-5 mx-auto">
                <span class="hex mx-auto mb-3">
                  <i class="icon-organized"></i>
                </span>
                  <h4 class="pt-2">Organized</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-5 mx-auto">
                <span class="hex mx-auto mb-3">
                  <i class="icon-creative"></i>
                </span>
                  <h4 class="pt-2">Creative</h4>
              </div>
              <div class="col-5 mx-auto">
                <span class="hex mx-auto mb-3">
                  <i class="icon-quick-lerner"></i>
                </span>
                  <h4 class="pt-2">Quick Learner</h4>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Skill;