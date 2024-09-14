import React from 'react'
import HomeProduct from './components/HomeProduct'

const page = () => {
  return (
    <>
    <div className='container my-10  flex justify-between items-center '>
      <div className='container flex flex-col gap-2'>
        <em className='text-2xl capitalize'>are you hungry ?</em>
        <h1 className='text-4xl font-bold'>Don't Wait !</h1>
        <div>

        <button className='bg-yellow-500 w-[100px] rounded-full text-white h-[30px] my-2'>order now</button>
        </div>
      </div>
      <div>
        <img src='/img/pizza.png'/>
      </div>
    </div>
    <HomeProduct/>
      
    </>
  )
}

export default page
