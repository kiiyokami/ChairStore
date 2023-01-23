import React from 'react'
import '../assets/App.css'

export default function item() {
  return (
    <div className='flex flex-wrap item-page'>
      <div>
        <img src='https://cdn.shopify.com/s/files/1/0505/8897/5259/products/Sofieblueberry.jpg?v=1624847494' />
      </div>
      <div className='mt-10 mx-5'>
        <h1 className='text-4xl pb-2'>Monobloc Chair</h1>
          <h2 className='text-2xl pb-2'> Dimensions: </h2>
            <h3 className='text-lg pb-2 ml-5'> 727 x 727 cm</h3>
          <h2 className='text-2xl pb-2'> Specifications </h2>
            <h3 className='text-lg pb-2 ml-5'> Plastic Chair. That's all into it.</h3>
      </div>
    </div>
  )
}
