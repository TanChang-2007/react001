import React from 'react'
import Iphone from './Iphone.png'
import Iphones from './Iphones.png'
import { Icon } from '@iconify/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Details() {
  return (
    <div className='bg-white rounded-2xl flex items-center p-20 relative'>
      <div>
        <img className='relative mr-24' src={Iphone} />
      </div>
      <div>
        <Link to="/" className='absolute top-6 right-6 flex-1 justify-items-end'>
          <Icon icon="akar-icons:cross" width="20" height="20" />
        </Link>
        <div className='relative text-3xl font-bold mb-4'>Iphone 14 Pro Max </div>
        <button className=' flex flex-row gap-4 pb-4'>
          <div className='w-8 h-8 bg-black relative rounded-full'></div>
          <div className='w-8 h-8 bg-green-900 relative rounded-full'></div>
          <div className='w-8 h-8 bg-slate-400 relative rounded-full'></div>
          <div className='w-8 h-8 bg-blue-300 relative rounded-full'></div>
          <div className='w-8 h-8 bg-orange-200 relative rounded-full'></div>
          <Link to="/about" className='text-blue-600 underline'>About</Link>
        </button>
        <div className="flex flex-col gap-1">
          <button className='flex flex-row gap-1 pt-5'>
            <div className='relative font-bold border-2 px-9 py-3 rounded-md border-slate-500 m-1'>128GB <p className=' font-normal p-1'>RM5,299.00</p> </div>
            <div className='relative font-bold border-2 px-9 py-3 rounded-md border-slate-500 m-1'>256GB <p className=' font-normal p-1'>RM5,799.00</p> </div>
          </button>
          <button className='flex flex-row gap-1'>
            <div className='relative font-bold border-2 px-9 py-3 rounded-md border-slate-500 m-1'>512GB <p className=' font-normal p-1'>RM6,699.00</p> </div>
            <div className='relative font-bold border-2 px-9 py-3 rounded-md border-slate-500 m-1'>1TB <p className=' font-normal p-1'>RM7,599.00</p> </div>
          </button>
        </div>
        <button className='mt-8 relative w-full rounded-md py-4 bg-blue-600 text-white'>
          Add To Bag
        </button>
      </div>
    </div>
  )
}

function About() {
  return (
    <body className=' bg-white rounded-3xl flex justify-center items-center flex-col p-20 relative'>
      <div>
       <Link to="/details" className='flex-3 justify-start items-start absolute top-0 left-0 m-5'>
         <Icon icon="akar-icons:cross" width="20" height="20" />
       </Link>
        <div className='flex'>
        <img className='w-64' src={Iphone} />
        <img className='bg-white w-auto' src={Iphones} />
      </div>
      <div>
        <div className='flex flex-center items-center flex-row text-lg font-bold pr-24'><Icon icon="ion:hardware-chip" width="50" height="50" className='m-2' /> The new AC1 Ultra Chip </div>
        <div className='pl-10'>The best smart phone chip ever</div>
      </div>
      </div>
    </body>
  )
}


function Home() {
  return (
    <div className="w-96 flex flex-col p-8 gap-8 bg-white rounded-lg">
      <img className="w-full px-8 relative" src={Iphone} />
      <div class="w-full">
        <p className='relative font-mono text-2xl'>Iphone 14 Pro</p>
        <p className='text-slate-500 text-xs relative'>by Chang in MRGA</p>
        <p className='text-center py-1 bg-blue-600 text-sm rounded-full w-28 mt-4 text-white'> Local Seller</p>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className='font-bold text-xl'>RM 5000</p>
            <p className='flex items-center'>
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star-outline" className="w-4 h-4" />
              <span class="ml-2">4/5</span>
            </p>
          </div>
          <Link to="/details" className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
            <Icon className='text-white' icon="ic:outline-shopping-cart" width="24" height="24" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='flex justify-center items-center flex-col w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
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