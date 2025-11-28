import React from 'react'
import {Router,Routes,Route} from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import DigitalMarketing from './pages/services/DigitalMarketing'
import WebDevelopment from './pages/services/WebDevelopment'
import AppDevelopment from './pages/services/AppDevelopment'
import BpoService from './pages/services/BpoService'
import Ecommerce from './pages/services/Ecommerce'
import ScrollTop from './components/ScrollBar'
import Contact from './pages/Contact'
import BLog from './pages/BLog'
import ProductPhotography from './pages/services/ProductPhotography'
import Whatsapp from './components/Whatsapp'
import Career from './pages/Career'


  function App() {
  return (
    <div>
      <ScrollTop/>
      <Navbar/>
      <Whatsapp/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />

          {/* Services Pages  */} 
        <Route path='/services/ecommerce' element={<Ecommerce/>} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/product-photography" element={<ProductPhotography/>} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/bpo" element={<BpoService />} />
        
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<BLog/>} />
        <Route path='/career' element={<Career/>} />

      </Routes>
      <Footer/>

    </div>
  )
}

export default App