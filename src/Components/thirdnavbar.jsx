import React, { Component } from 'react';
import './thirdnavbar.scss';



class Thirdnavbar extends Component {

    render(){
      return (

        <header class="thirdnavbar">

       <nav class="navbar navbar-fixed-top">
       <div class="third-container-fluid">        

      <nav className="thirdnav">
          <ul className="nav navbar-right">
            <li><a href="#Interest">0% Interest</a></li>
            <li><a href="#Deals">Instant Access to Deals in Your Area</a></li>
            <li><a href="#No more">No more Intermidates</a></li>
            
          </ul>
          </nav>
         </div> 
      </nav>
      </header>

      )
    }
}
export default Thirdnavbar;