import React, { Component } from 'react';
import './signup.scss';


export default class Signup extends Component {

render() {
return(

    <div className="row">
    <div className="left">
    <img className ="foodpic" src="https://klaratheexplorer.files.wordpress.com/2018/09/img_4441.jpg?w=730"/>
    <div className="membcolor">
     <h5 className="membinfo"> 
     $12 <br />
     Annual Membership<br />
     (30 days FREE TRIAL)
      </h5>
      <div className="text-justify"><h5 className=" memb-works">How it Works?</h5>
      <p> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet 
      fermentum. Donec sed odio operae, eu vulputate felis. 
      <hr className="signup-hr"></hr>
       
    </p>
    </div>
       <div  className="text-justify"><strong>Terms & Benefits:</strong>           
                <ul className="text-justify tandb">
                    <li><span>Explain how it works</span></li>
                    <li><span>More Information here</span></li>
                    <li><span>Yet evern more info here</span></li>
                    <li><span>Want to make sure you get it</span></li>
                    <li>The last of the info</li>
                </ul>           
     </div>
     
    </div>
    </div>

<div className="right">
    <div>
        <p className="Rtop">
            <strong>GET YOUR DEALS!</strong>
        </p>
        <span className="log"><a href="log">Log In</a></span>
        <span className="sign"><a href="#Sign">Sign up</a></span>
        <form action="/action_page.php">
            <div className="signup-info">
            <div className="top-row">
                <div className="field-wrap">

                    <label>First Name</label>
                    <br/><input type="text" required autocomplete="off" />
                </div>
                <div className="field-wrap">
                   <label>Last Name</label>
                  <br /><input type="text" required autocomplete="off" />
                </div>
            </div>
            <div clasNames="field-wrap">
                <label>username(optional)<span className="req"></span></label>
               <br /> <input id="username" type="text" />
            </div>

            <div className="field-wrap">
                <label>Email<span className="req"></span></label>
               <br /> <input className="input-style" type="text" name="email" required />
            </div>
            <div>
                <label>Password<span className="req"></span></label>
               <br /> <input type="password" name="psw" required />
            </div>
            <div>
                <label>Repeat Password<span className="req"></span></label>
                <br/><input type="password" name="psw-repeat" required />
                {/* <input type="checkbox" checked="checked" /> */}
            </div>
        
            <div>
            <p className="pwmust"><strong>Passwork must:</strong></p>
                <ul className="pwmustli">
                    <li>Have at least 8 characters</li>
                    <li>Have at least 1 captial letter </li>
                    <li> Have at least 1 number </li>
                    <li>Not be the same as the user name </li>
                </ul>
            </div>
            <label><input type="checkbox" /> &nbsp; I accept terms and policies</label>

            <div className="signsubmit">
                {/* <button type="submit" className="signupbtn">SIGN UP</button> */}
                <button type="submit" className="btn col-sm-2 offset-sm-4">Sign Up</button><br />
            </div>
            <p className="memb"> * and enjoy 30 days free membership</p>
</div>
        </form>

    
</div>
</div>
</div> 


)
}
}

