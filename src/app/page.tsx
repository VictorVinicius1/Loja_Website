'use client'
import React, { useState } from 'react'
import SelectBar from './Components/SelectBar'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function Page() {

  const[menupeca,setmenupeca] = useState('1')
 
  return (
  <>
    <div id='div_titulo' className='p-0 bg-purple-500 h-[30vh] w-[100vw] justify-center flex items-center'>
      <h1 className='text-8xl text-white italic font-serif '>Florescer</h1>
    </div>
    <SelectBar menupeca={menupeca} setmenupeca={setmenupeca}>

    </SelectBar>

    
    </>
  )
}
