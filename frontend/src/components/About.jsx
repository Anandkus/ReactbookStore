import React from 'react'
import Navbar from './Navbar';

import Footer from './Footer';
const About = () => {
  return (
    <>
      <Navbar />
      <div className=''>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  mt:text-4xl'>This is about page </h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About