/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Iphone from './Iphone.png';
import Iphones from './Iphones.png';

function Details() {
  const [storage, setStorage] = useState(0);
  return (
    <div className="bg-white rounded-2xl flex items-center p-20 relative">
      <div>
        <img className="mr-24" src={Iphone} alt="" />
      </div>
      <div>
        <Link to="/" className="absolute top-6 right-6 flex-1 justify-items-end">
          <Icon icon="akar-icons:cross" width="20" height="20" />
        </Link>
        <div className="text-3xl font-bold mb-4">Iphone 14 Pro Max </div>
        <div className="flex items-center gap-4 pb-4">
          <div className="w-8 h-8 bg-black rounded-full hover:bg-black active:bg-black focus:outline-double focus:ring focus:ring-red-500" />
          <div className="w-8 h-8 bg-green-900 rounded-full hover:outline-double outline-2 hover:outline-green-900" />
          <button type="button" className="w-8 h-8 bg-slate-400 rounded-full" />
          <div className="w-8 h-8 bg-blue-300 rounded-full" />
          <div className="w-8 h-8 bg-orange-200 rounded-full" />
          <Link to="/about" className="text-blue-600 underline">About</Link>
        </div>
        <div className="flex flex-col gap-1 w-[22rem]">
          <div className="flex flex-row gap-1 pt-5">
            <button type="button" onClick={() => setStorage(0)} className={`font-bold border-2 py-3 px-6 flex-1 rounded-md m-1 gap-1 hover:bg-slate-100 flex flex-col justify-center ${storage === 0 ? 'border-slate-500' : 'border-slate-300'}`}>
              128GB
              {' '}
              <p className="font-normal">RM5,299.00</p>
              {' '}
            </button>
            <button type="button" onClick={() => setStorage(1)} className={`font-bold border-2 py-3 px-6 flex-1 rounded-md m-1 gap-1 hover:bg-slate-100 flex flex-col justify-center ${storage === 1 ? 'border-slate-500' : 'border-slate-300'}`}>
              256GB
              {' '}
              <p className=" font-normal">RM5,799.00</p>
            </button>
          </div>
          <div className="flex flex-row gap-1">
            <button type="button" onClick={() => setStorage(2)} className={`font-bold border-2 py-3 px-6 flex-1 rounded-md m-1 gap-1 hover:bg-slate-100 flex flex-col justify-center ${storage === 2 ? 'border-slate-500' : 'border-slate-300'}`}>
              512GB
              {' '}
              <p className=" font-normal">RM6,699.00</p>
              {' '}
            </button>
            <button type="button" onClick={() => setStorage(3)} className={`font-bold border-2 py-3 px-6 flex-1 rounded-md m-1 gap-1 hover:bg-slate-100 flex flex-col justify-center ${storage === 3 ? 'border-slate-500' : 'border-slate-300'}`}>
              1TB
              {' '}
              <p className=" font-normal">RM7,599.00</p>
              {' '}
            </button>
          </div>
        </div>
        <button type="button" className="mt-8 w-full rounded-md py-4 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-200 focus:outline-double focus:ring focus:ring-blue-800">
          Add To Bag
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="relative bg-white rounded-3xl flex justify-center items-center flex-col p-20">
      <div>
        <Link to="/details" className="flex-3 justify-start items-start absolute top-0 right-0 m-8">
          <Icon icon="akar-icons:cross" width="20" height="20" />
        </Link>
        <div className="flex gap-12">
          <img className="w-64" src={Iphone} alt="" />
          <img className="bg-white w-auto" src={Iphones} alt="" />
        </div>
        <div className="flex mt-12 mb-8">
          <div className="w-1/2">
            <div className="flex items-center text-lg font-bold gap-2 mb-2">
              <Icon icon="ion:hardware-chip" width="50" height="50" />
              {' '}
              The new AC1 Ultra Chip
              {' '}
            </div>
            <div className="pl-1">The best smart phone chip ever</div>
          </div>
          <div className="w-1/2">
            <div className="ml-1 mb-2"><Icon icon="fa:battery" width="50" height="50" /></div>
            <div className="ml-1">Up to 28 hours video playback</div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-1/2">
              <Icon icon="iconoir:face-id" width="50" height="50" className="mb-2" />
              <div className="pl-1">Face ID</div>
            </div>
            <div className="w-1/2">
              <Icon className="mb-1" icon="ic:round-5g" width="50" height="50" />
              <div className="pl-1">5G Capable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="w-96 flex flex-col p-8 gap-8 bg-white rounded-lg">
      <img className="w-full px-8 relative" src={Iphone} alt="product" />
      <div className="w-full">
        <p className="font-mono text-2xl">Iphone 14 Pro</p>
        <p className="text-slate-500 text-xs relative">by Chang in MRGA</p>
        <p className="text-center py-1 bg-blue-600 text-sm rounded-full w-28 mt-4 text-white"> Local Seller</p>
        <div className="flex justify-between items-end mt-4">
          <div>
            <p className="font-bold text-xl">RM 5000</p>
            <p className="flex items-center">
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star" className="w-4 h-4" />
              <Icon icon="mdi:star-outline" className="w-4 h-4" />
              <span className="ml-2">4/5</span>
            </p>
          </div>
          <Link to="/details" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Icon className="text-white" icon="ic:outline-shopping-cart" width="24" height="24" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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

export default App;
