import React from 'react';


const Header = props => {
    return (
      <header className="contentsection masthead d-flex text-white text-center" id="page-top">
        <div id="wrapper">
          <div id="title">
            <div className="container text-white my-auto text">
              <div className="mb-1">Hello, I'm <span className="text-secondary">Maulika Desai</span></div>
              <div className="mb-5 font-weight-normal">
                <em>Computer Programmer | Full Stack Developer | Web Developer</em>
              </div>
              <div className="canvasdiv">
              <canvas id="canvas" width="1950px" height="575px"></canvas>
              <canvas id="canvasbg" width="1950px" height="575px"></canvas>
              </div>
            </div>
          </div> 
        </div>
      </header> 
    );
  };

export default Header;