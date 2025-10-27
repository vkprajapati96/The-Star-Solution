import React from 'react'
import {Router,Routes,Route} from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import DigitalMarketing from './pages/services/DigitalMarketing'
import FreeSupport from './pages/services/FreeSupport'
import WebDevelopment from './pages/services/WebDevelopment'
import AppDevelopment from './pages/services/AppDevelopment'
import BpoService from './pages/services/BpoService'
import Ecommerce from './pages/services/Ecommerce'
import SnakeCursor from './components/SnakeDotCursor'

function App() {
  return (
    <div>
              <SnakeCursor />


      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />

          {/* Services Pages  */}

        <Route path='/services/ecommerce' element={<Ecommerce/>} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/free-support" element={<FreeSupport />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/bpo" element={<BpoService />} />



      </Routes>
      <Footer/>

    </div>
  )
}

export default App