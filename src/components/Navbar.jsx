import React, { Component } from 'react';
import logoPlatzi from '../img/logo.png';
import '../Navbar.css';

export default class Navbar extends Component{
  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            <img src={logoPlatzi} height="30" alt="logo Platzi" />
          </a>
        </nav>  
      </div>
    
    )
  }
}