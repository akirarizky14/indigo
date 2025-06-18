import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Views/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Contactus from './Components/Contactus/Contactus';
import Aboutus from './Components/Aboutus/Aboutus';
import Footer from './Components/Footer/Footer';
import InvestingApp from './Components/Investing/Investing';

function App() {
  return (
    <BrowserRouter>
      <Navbar className="navbar" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about-us">
                <Aboutus />
              </div>
              <div id="products">
                <Products />
              </div>
              <div id="contact-us">
                <Contactus />
              </div>
            </>
          }
        />
        <Route path="/investing" element={<InvestingApp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
