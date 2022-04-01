import React from 'react'
import Iphone from './Iphone.png'
import { Icon } from '@iconify/react';

function App() {

  return (
    <body className= " flex items-center justify-center h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
     <div>
     <img className=" w-96 rounded-t-lg drop-shadow-md relative "src={Iphone}/> 
     <div class=" w-96 h-36 bg-orange-100 rounded-b-lg absolute "></div>
     <p className='relative font-mono pl-3 pt-1 text-2xl'>Iphone 14 Pro 256GB</p>
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

export default App