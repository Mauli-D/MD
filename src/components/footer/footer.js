import React from 'react';

const Footer = props => {
    return (
      <footer className="Footer text-center text-white bg-dark">
        <div className="text-center lead">
          <p className="text-muted small mb-0">Maulika Desai &copy; {new Date().getFullYear()} </p>
        </div>
      </footer>
    );
  };

  export default Footer;