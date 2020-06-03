/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
        <div class="container-fluid">  
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top" data-spy="scroll">
            <a class="navbar-brand sans nb-color" href="#">Paul Min</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbar-example" class="collapse navbar-collapse">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                <a class="nav-link sans" href="#about">About <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link sans" href="#skills">skills </a>
                </li>
                <li class="nav-item">
                <a class="nav-link sans" href="#resume">experience </a>
                </li>
                <li class="nav-item">
                <a class="nav-link sans" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                <a class="nav-link sans" href="#contact">Contact</a>
                </li>
            </ul>
            </div>
            </nav> 
        </div>

  
  
  
 
  
  


    </React.Fragment>
  );
};


export default Nav;