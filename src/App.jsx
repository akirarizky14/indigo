import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Views/Home/Home';
import Navbar from './Components/Navbar/Navbar';

import Products from './Components/Products/Products';
import Contactus from './Components/Contactus/Contactus';
import Aboutus from './Components/Aboutus/Aboutus';
import Footer from './Components/Footer/Footer';
function App() {
    return (
      <>
          <BrowserRouter className="container">
                <Navbar className="navbar"/>
                <div id="home">
                    <Home />
                </div>
                <div id="about-us">
                    <Aboutus/>
                </div>
                <div id="products">
                    <Products />
                </div>
                <div id="contact-us">
                    <Contactus />
                </div>
              <Footer/>
          </BrowserRouter>
      </>
    );
}

export default App;