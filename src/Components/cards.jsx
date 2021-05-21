import React, { Component } from 'react';
import './cards.scss';
import facebook from './img/facebook.png';


  

export default class Cards extends Component { 

    render() {
        return (
           
            <div className="row">
            <div className="left">
            <img className ="foodpic" src="https://klaratheexplorer.files.wordpress.com/2018/09/img_4441.jpg?w=730"/>
            <div>
             <p className="text-justify"> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet 
              fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
               Praeterea iter est quasdam res quas ex communi.
              </p>
              <h5 className="text-justify">How it Works?</h5>
              <p className="text-justify"><strong>Step 1:</strong>< br /> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet 
              fermentum. Donec sed odio operae, eu vulputate felis. 
               
            </p>
               <p  className="text-justify"><strong>Step 2:</strong>< br /> 
               Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti 
               sibi concilium totius Galliae. </p>
               <p className="text-justify"><strong>Step 3:</strong>< br /> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet 
              fermentum. Donec sed odio operae, eu vulputate felis.</p>

            </div>
            </div>
            <div className="right">
              <div>
                <p className="Rtop">
                  <strong>GET YOUR DEALS!</strong>
                </p>
                <span className="log"><a href="log">Log In</a></span>
                <span className="sign"><a href="#Sign">Sign up</a></span>
                <p className= "Wel">WELCOME BACK!</p>

 
<form>
  <div className="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" />
    
  </div>
  <div className="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputEmail1"/>
    <a href="#" id="forgot">Forgot Password?</a>
   </div>
   
  <button type="submit" className="btn col-sm-2 offset-sm-5">Login</button><br />

          <div className="or-container"><br />
             <div className="or-label">OR</div><br />
             
                 </div>
                <div className="row">                
              <div className="col-md-9"> <a class="btn-google" href="#"><img className="google" src="https://img.icons8.com/color/16/000000/google-logo.png"/> SIGN IN WITH GOOGLE</a> </div><br />
             <br /><div class="col-md-9"> <a class="btn-facebook" href="#"><img className="fb" src={facebook}/> SIGN IN WITH FACEBOOK</a> </div>
                </div> <br />              
            
    </form>   
            </div>            
             </div>    
             
            </div>  
        )  
    }
}


