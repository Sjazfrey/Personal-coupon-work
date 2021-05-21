import React, { Component } from 'react';
import './customer.scss';

import Sidebar from './sidebar';




export default class Cards extends Component { 

    render() {
        return (

<div>
  <Sidebar /> 

 <div className="container row">
{/* <div className="second-col"> */}

    <div className="col-2 offset-2"> 
    
    <div className="column"><span className="profile"><i class="fa fa-user two"></i></span></div>
  
    <a class = "custname" href="#name">Julian Huarez</a><br />
    <a class ="custemail"href="mailto:webmaster@example.com">webmaster@example.com</a>
    
    <div className="fcolor"><a href = "#link">facebook</a></div>

    <div className="tcolor"><a href = "#link"> twitter</a></div><br />

    <span className="circle plus"><a href = "#link"></a></span><br />

    <div id="border-box"><p className="Promo-space">Promotion Space:<br />  Share your experience Local Coupon App on your social media profile and get X% discount on your membership. <br /><br />Conditions: <br />Use #LocalCoupons at the end of your post. Promositon available only once. </p></div>
  </div>
    

    <div className="col-6 vl">
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Personal Information
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Personal Information:</p>
            <p>Customer ID:</p>
            <p> First Name:</p>
            <p> Last Name:</p>
            <p>User Name: (optional)</p>
            <p>Email:</p>
            <p>Password:</p>
            <p>Address:</p>
            <p>City:</p>
            <p>Postal Code: </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Subscription Plan
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <p>Subscription Plan</p>
       <p>$12.00</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Payment Information
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <option value = "Payment Information" selected>Payment Information:</option>
            <a href = "#PayPal">PayPal</a> 
            <option href = "#GPay">Google Pay</option> 
            <option value = "#Pay">Apple Pay</option>  
      </div>
    </div>
  </div>
</div>

       </div>


    <div className="col-2 third-column">SAVINGS DETAILS
    <p>Monthly Savings</p>
    <div className="Savings"></div>
    <p>Annual Savings</p>
    <div className="Savings"></div>

    <div id="border-box"><p className="friendsk">Let your friends know how much you saved and get (X  promotion) on the next redeemed coupon. <div className="fcircle">Tell a friend</div></p>   </div>

    
  </div>

 




  
 
 </div>
 </div>


 












     )
    }
}