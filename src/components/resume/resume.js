import React from 'react';
import details from './companyDetails';
// import singleRes from './singleRes';


class Resume extends React.Component {
  render() {
    return (
      <section className="contentsection bg-light text-center" id="experience">
        <div className="contentsection-heading">
          <h1 className="text-uppercase mb-3">Work Experience</h1>
        </div>
        <div className="container">
          <div className="row">
            <ul className="col-lg-7 mx-auto text-white text-justify">
              {details.map((detail, index) => {
                return (
                  <li className="bg-dark mb-4 p-3">
                    <div>
                      <div className="row pt-3">
                        <div className="col-6 mb-2 mx-auto">
                          <h4> {detail.position}</h4>
                        </div>
                        <div className="col-6 mb-2 mx-auto text-right">
                          <div className="date">
                            <i className="icon-calendar"></i> {detail.date}
                          </div>
                        </div>
                      </div>
                      <hr className="hr-main" />
                      <h4><i className="icon-briefcase"></i> {detail.companyName}</h4>
                      <div>
                        {detail.responsibilities.map(res => (
                          <p> <i className="icon-pin"></i>
                          <i> {res.res}</i>
                        </p>
                        ))}
                      </div>
                    </div>
                  </li>
                )
              })}
              </ul>
            </div>
          </div>
        <div>
          <a className="btn btn-primary btn-xl" href="MaulikaDesai.pdf" target="_blank" download>Download Resume!</a>     
        </div>
      </section>
    );
  }
}

export default Resume;