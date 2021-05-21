import React, { Component } from 'react';
import './sidebar.scss';




export default class Cards extends Component { 

    render() {
        return (

<div className="sidenav">

<span className="dot"><i class="fa fa-user"></i>
<a className="atitle" href="#Account">Account</a></span>

  <span className="dot"><i class="fa fa-ticket"></i>
<a className="atitle" href="#">Coupon</a></span>
  
  <span className="dot"><i class="fa fa-question"></i><a className="htitle" href="#">Help</a></span> 
  </div>

)
}
}