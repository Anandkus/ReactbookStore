import React from 'react'
import data from '../../public/data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cart from './Cart';
const Freebook = () => {
  const filterData = data.filter((data) => data.category === 'Free')
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
              filterData.map((item) => (
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