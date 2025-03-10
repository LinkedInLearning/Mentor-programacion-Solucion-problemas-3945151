import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PageHome from './components/PageHome'

 
function App() {

  return (
    <>
      <Header />

      <div className="row">
       
        <div className="col-md-12">
          
            <Routes>
              <Route path="/" element={<PageHome />} />
            </Routes>
           
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
