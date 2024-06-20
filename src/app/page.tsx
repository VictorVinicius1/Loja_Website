'use client'
import React, { useState } from 'react'
import SelectBar from './Components/SelectBar'



export default function Page() {

  const[menupeca,setmenupeca] = useState('1')
 
  return (
  <>
    <div id='div_titulo' className='p-0 bg-purple-500 h-[30vh] w-[100vw] justify-center flex items-center'>
      <h1 className='text-8xl text-white italic font-serif '>Florescer</h1>
    </div>
    <SelectBar menupeca={menupeca} setmenupeca={setmenupeca}>

    </SelectBar>
    <div className='bg-red-500 h-[30vh] w-[100vw] over'>
      

    </div>


    
    </>
  )
}
