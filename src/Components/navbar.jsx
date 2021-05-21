import React, { Component } from 'react';
import './navbar.scss';
import Logo from './img/pic.jpeg';
import Navbarsearch from './navbarsearch';
import Thirdnavbar from './thirdnavbar';

  
  class Navbar extends Component {

      render(){
        return (
          <header className="fixed-top front">

          <nav className="navbar navbar-fixed-top">
              <div className="container-fluid">
      
                  <div className="logo navbar-header">
                      <img src={Logo} alt="Logo" title="Logo" />
                  </div>
      
                  <nav className="navigation">
                      <ul className="nav navbar-right">
                          <li><a href="#Sign">Sign in/Sign up</a></li>
                          <li><a href="#About">About</a></li>
                          <li><a href="#Help">Help</a></li>
      
                      </ul>
                  </nav>
              </div>
          </nav>
          <Navbarsearch />
          <Thirdnavbar />
      </header>

        )
      }
    }

  
export default Navbar;