import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function page() {
  return (
  <>
    <div id='div_titulo' className='bg-purple-500 h-[30vh] w-[100vw] justify-center flex items-center'>
      <h1 className='text-8xl text-white italic font-serif'>Florescer</h1>
    </div>
    <div className='bg-blue-500 h-[15vh] w-[100vw]'>
      <Box sx={{ maxWidth: { xs: 320, lg: 1600 }, bgcolor: 'background.paper' }}>
        <Tabs
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
      
        </Tabs>
      </Box>
      

    </div>
    </>
  )
}
