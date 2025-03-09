import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Nav-Links/Home";
import Footer from "./Footer";
import Events from "./Nav-Links/Events";
import Speakers from "./Nav-Links/Speakers";
import ContactUs from "./Nav-Links/ContactUs";
import BHost from "./Nav-Links/BHost";
import Register from "./Nav-Links/Register";
import './App.css'

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/speakers" element={<Speakers />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/host-regi" element={<BHost />} />
    <Route path="/speaker-registration" element={<Register />} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
