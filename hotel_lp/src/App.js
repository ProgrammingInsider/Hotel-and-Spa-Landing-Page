import React, { useEffect } from 'react'
import './index.css';

// Components
import Hero from './components/Hero'
import Header from './components/Header'
import Treatment from './components/Treatment'
import Packages from './components/Packages'
import Service from './components/Service'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'


// #473e3e
const App = () => {
  useEffect(()=>{
    window.resizeTo(100,900)
  },[])
  return <>
  <Header/>
  <Hero/>
  <Treatment/>
  <Packages/>
  <Service/>
  <Benefits/>
  <Contact/>
  <Footer/>
  </>
     
  
}

export default App