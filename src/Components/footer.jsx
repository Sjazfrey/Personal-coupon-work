import React, {
  Component
} from 'react';
import "./footer.scss";
import Logo from './img/pic.jpeg';


export default class Footer extends Component {

  render() {
    return (
      <footer className="site-footer">
      <hr className="footer-hr">
      </hr>
      <div className="container">
          <div className="row">
              <div className="col-sm-12 col-md-3">
                  <div className="logo">
                      <img src={Logo} alt="Logo" title="Logo" />
                  </div>
                  <h6 className="localtitle">Local Coupon</h6>
                  <p className="texts-justify"> Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                      vulputate felis rhoncus.
                      Praeterea iter est quasdam res quas. </p>
                  <div>
                      <ul className="social-icons">
                          <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                          <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                          <li><a className="youtube" href="#"><i className="fa fa-youtube"></i></a></li>
                      </ul>
                  </div>
              </div>
  
              <div className="col-xs-6 col-md-3">
                  <h6>Company</h6>
                  <ul className="footer-links">
                      <li><a href="#">About</a></li>
                      <li><a href="#">Investor Relations</a></li>
                      <li><a href="#">Code of Conduct</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Admins</a></li>
                  </ul>
              </div>
  
              <div className="col-xs-6 col-md-3">
                  <h6>Reach Us</h6>
                  <ul className="footer-links">
                      <li><a href="#">hello@localcoupon.com</a></li>
                      <li><a href="#">972-555-5555</a></li>
                      <li><a href="#">772 Lyonwood Ave Walnut, CA</a></li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                      <a href="#">LocalCoupon LLC</a>.
                  </p>
  
              </div>
  
  
          </div>
      </div>
      <div>
          <ul className="legal">
              <li className="separator"><a href="#">Terms and Condtions</a></li>
              <li className="separator"><a href="#">Privacy Policy</a></li>
              <li className="separator"><a href="#">Sitemap</a></li>
              <li><a href="#">Disclaimer</a></li>
          </ul>
      </div>
  
  </footer>
    )
  }
}