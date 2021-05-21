import React from 'react';
import Navbar from './Components/navbar';
import Cards from './Components/cards';
import Footer from './Components/footer';
import Signup from './Components/signup';
import Customer from './Components/customer';
import Sidebar from './Components/sidebar';


function App() {

  return (
    <div className="App">
      <Navbar />        
      <Cards />
      {/* <Customer /> */}
      {/* <Signup /> */}
      <Footer />   
      <Sidebar />
     
      
      
    </div>
   
  );
}

export default App;
