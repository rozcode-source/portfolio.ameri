import React from "react";
import Navbar from "./commons/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import "./App.css";


function App() {

  return (

    <div className="app">
     
        <div className="sidebar">
      <Navbar />  
       </div>
       <div className="maincontent">
      <Routes>
     <Route exact path="/" element={<Home/>}  />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contact" element={<Contact />}/>
    <Route exact path="/gallery" element={<Gallery/>}/>
      </Routes>
   </div>

    </div>
  );
}

export default App;