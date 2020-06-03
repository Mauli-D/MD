import React from "react";

/** A React component for scrolling back to the top of the page **/
const ScrollBar = props => {
  return (
    <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
      <i className="fas fa-angle-up"></i>
    </a>
  );
};


export default ScrollBar;