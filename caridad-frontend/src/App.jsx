import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Plantilla1 from './Pages/Plantilla1/Plantilla1';
import Plantilla2 from './Pages/Plantilla2/Plantilla2';
import Plantilla3 from './Pages/Plantilla3/Plantilla3';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/1" element={<Plantilla1/>} />
        <Route path="/2" element={<Plantilla2/>} />
        <Route path="/3" element={<Plantilla3/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App