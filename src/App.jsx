import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Home from './page/home/Home'
import Footer from './Components/footer/Footer'
import BasicExample from "./Components/card/Card"

export default function App() {
  return (
    <div> 
      <Navbar/>
      <Home/>
      <BasicExample/>
      <Footer/>
      
    </div>
  )
}
