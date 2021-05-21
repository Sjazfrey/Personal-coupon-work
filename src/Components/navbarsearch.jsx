import React,{ Component } from 'react';
import './navbarsearch.scss'


class Navbarsearch extends Component {

  render(){
  return (  

   <header className="navbarsearch">
   
   <nav class="navbar navbar-fixed-top">
         <form className="form-search form-inline">
            <input type="text" className="search-query" placeholder="Search" /> 
        </form>

      <nav className="navsearch">
            <ul className= "nav navbar-right">
            <li><a href="Deals">All Deals</a></li>
            <li><a href="Category">Deals By Category</a></li>
            <li><a href="Price">Deals By Price</a></li>
            <li><a href="Viewed">Recent Viewed</a></li>            
            </ul>
            </nav>
        </nav> 

   </header>
  )  
  }
};

export default Navbarsearch;