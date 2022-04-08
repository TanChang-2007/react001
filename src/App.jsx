import React from 'react'
import Iphone from './Iphone.png'
import Iphones from './Iphones.png'
import { Icon } from '@iconify/react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function Details() {
  return (
    <body className='flex items-center justify-center h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='bg-white w-10/12 h-5/6 rounded-2xl absolute'> </div>
      <div className=' pl-44 m-20'>
        <img className='relative mr-24' src={Iphone} />
      </div>
      <div className=' flex flex-col'></div>
      <body className=' mr-52'>
        <button className='relative flex-1 justify-items-end pl-80 m-4 pb-8'>
          <Icon icon="akar-icons:cross" width="35" height="35" />
        </button>
        <div className='relative text-3xl font-bold mb-4 m-1'>Iphone 14 Pro Max </div>
        <button className=' flex flex-row gap-10 pb-4'>
          <div className='w-10 h-10 bg-black relative rounded-full'></div>
          <div className='w-10 h-10 bg-green-900 relative rounded-full'></div>
          <div className='w-10 h-10 bg-slate-400 relative rounded-full'></div>
          <div className='w-10 h-10 bg-orange-200 relative rounded-full'></div>
          <div className='w-10 h-10 bg-blue-300 relative rounded-full'></div>
        </button>
        <button className='flex flex-row gap-8 pt-5'>
          <div className='relative font-bold border-2 pl-9 pr-9 p-3 rounded-md border-slate-500 m-1'>128GB <p className=' font-normal p-1'>RM5,299.00</p> </div>
          <div className='relative font-bold border-2 pl-9 pr-9 p-3 rounded-md border-slate-500 m-1'>256GB <p className=' font-normal p-1'>RM5,799.00</p> </div>
        </button>
        <button className='flex flex-row gap-8'>
          <div className='relative font-bold border-2 pl-9 pr-9 p-3 rounded-md border-slate-500 m-1'>512GB <p className=' font-normal p-1'>RM6,699.00</p> </div>
          <div className='relative font-bold border-2 pl-9 pr-9 p-3 rounded-md border-slate-500 m-1'>1TB <p className=' font-normal p-1'>RM7,599.00</p> </div>
        </button>
        <button className='pt-3 pb-16'>
          <div className='relative w-96 rounded-md h-7 bg-blue-600 text-white'>Add To Bag</div>
        </button>
      </body>

    </body>
  )
}

function About() {
  return (
    <body className='flex justify-center items-center flex-col'>
      <div className=''>
        <img src={Iphone} />
        <img src={Iphones} />
      </div>
      <div></div>
    </body>
  )
}


function Home() {
  return (
    <body className=" flex items-center justify-center h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div>
        <img className=" w-96 rounded-t-lg drop-shadow-md relative " src={Iphone} />
        <div class=" w-96 h-36 bg-orange-100 rounded-b-lg absolute "></div>
        <p className='relative font-mono pl-3 pt-1 text-2xl'>Iphone 14 Pro</p>
        <p className='text-slate-500 indent-4 text-xs relative font-serif'> by Chang in MRGA</p>
        <p className='relative pl-3 border-2 border-orange-600 w-28 m-2 rounded-lg'> Local Seller</p>
        <p className='relative pl-3 font-bold '>RM 5000</p>
        <p className='relative pl-2'>★★★★✰ 4/5 </p>
        <p className=' flex items-end justify-end relative pr-2'>
          <button className='w-10 h-10 bg-orange-300 rounded-lg absolute'>
            <Icon className='pl-1' icon="ic:outline-shopping-cart" width="37" height="37" />
          </button>
        </p>
      </div>
    </body>
  )
}

function App() {
  return (
    <div className='flex justify-center flex-col w-full h-screen'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App