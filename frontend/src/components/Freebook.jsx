import { React } from 'react';
//import data from '../../public/data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cart from './Cart';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const Freebook = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:1101/book");
        const data = res.data;
        const filterData = data.filter((data) => data.category === 'Free');
        setBook(filterData);
      } catch (error) {
        console.log("error ", error)
      }
    }
    getBook();
  }, [])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus mollitia delectus reiciendis ratione et veniam nulla iste recusandae in. Sint voluptatibus amet nemo aut unde? Veniam eveniet totam natus?</p>
        </div>
        <div className=''>
          <Slider {...settings}>
            {
              book.map((item) => (
                <Cart data={item} key={item.id} />
              ))
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook