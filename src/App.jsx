import React from "react"
import Home from "./component/Home"
import Header from "./component/layout/Header"
import Footer from "./component/layout/Footer"
import { Routes, Route } from "react-router-dom"
import About from "./component/layout/About"
import Brand from "./component/layout/Brand"
import OurTeam from "./component/layout/OurTeam"
import PressRelease from "./component/layout/PressRelease"
import Contact from "./component/layout/Contact"
import Carriers from "./component/layout/Carriers"

function App() {
    return (
      <>
      {/* <h1 style={{color:"red", fontSize:"40px", background:"yellow"}}>hello</h1>
      <h2 className="a">hello 123</h2>
      <img src="" alt="" />
      <input type="text" />
      <br />
      <hr /> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/brand" element={<Brand/>} />
        <Route path="/ourteam" element={<OurTeam/>} />
        <Route path="/pressrelease" element={<PressRelease/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/carriers" element={<Carriers/>} />
      </Routes>
      <Footer/>
      </>
    )
}

export default App