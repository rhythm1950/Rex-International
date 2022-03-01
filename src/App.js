import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home></Home>} />
          <Route path='/services' element={<Services></Services>} />
          <Route path='/products' element={<Products></Products>} />
          <Route path='/sign-up' element={<SignUp></SignUp>} />
        </Routes>
      </Router>
    </>
    // <>
    //   <Navbar></Navbar>
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/about" element={<About />} />
    //       <Route exact path="/contact" element={<Contact />} />
    //       <Route exact path="/services" element={<Services />} />
    //       <Route path="*" element={<Home />} />
    //     </Routes>
    //   </Router>
    // </>

  );
}

export default App;
