import React from 'react';
import Home from './components/Home';
import Course from './components/Course';
import Contact from './components/Contact'
import About from './components/About';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Singup from './components/auth/signup'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
const App = () => {
  const route = () => {

  }
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white  '>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/course' element={<Course />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/res' element={<Singup />} />
          </Routes>
       
        </BrowserRouter>
      </div>


    </>
  )
}

export default App