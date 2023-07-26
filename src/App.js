import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import ContactUs from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
