import React from 'react'

const Cart = ({ data }) => {
    return (
        <>
            <div className='mt-4 my-3 p-3'>

            <div className="card bg-base-100 w-92 shadow-xl  border  hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white">
                <figure>
                    <img
                        src={data.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">{data.category}</div>
                    </h2>
                    <p>{data.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">$ {data.price}</div>
                        <div className="cursor-pointer px-2 py-1 hover:bg-pink-500 hover:text-white duration-200 rounded-lg  border-[2px]">Buy Now</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Cart