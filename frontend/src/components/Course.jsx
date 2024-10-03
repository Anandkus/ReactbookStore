import React, { useState, useEffect } from 'react'
//import data from '../../public/data.json';
import Card from './Cart';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
import axios from 'axios';
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:1101/book");
        //console.log(res.data);
        setBook(res.data);

      } catch (error) {
        console.log("get book error ", error)
      }
    }
    getbook()
  }, [])

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
          <div className='pt-28 items-center justify-center text-center'>
            <h1 className='text-2xl  mt:text-4xl'>We're delighted to have you {" "} <span className='text-pink-500'>Here! : ) </span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem temporibus unde inventore possimus commodi nesciunt non perspiciatis ab, odio dicta minima itaque vero cumque, vitae nemo quaerat porro! Eaque!</p>
            <Link to='/'> <button className='bg-pink-500 text-white  px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5 '>  Back</button></Link>
          </div>
          <div className='mt-5 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item) => (
              <Card data={item} key={item.key} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Course