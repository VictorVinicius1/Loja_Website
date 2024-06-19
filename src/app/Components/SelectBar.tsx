import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import React from 'react';
import Panels from './Panels';




interface AuxProps {
  menupeca: string;
  setmenupeca: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectBar({ menupeca, setmenupeca }: AuxProps) {
  const mudarmenu = (event: React.SyntheticEvent, newValue: string) => {
    setmenupeca(newValue);
  }
  return (
    <>

    <div className=' bg-purple-200 h-[50vh] w-[100vw]'>
        <div className=' h-[7vh] w-[100vw]'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={menupeca}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant='scrollable' scrollButtons="auto" onChange={mudarmenu} aria-label="lab API tabs example">
                    <Tab label="Pulseiras" value="1" />
                    <Tab label="Colares" value="2" />
                    <Tab label="Tornozeleiras" value="3" />
                    <Tab label="Aneis" value="4" />
                    <Tab label="brincos" value="5" />
                    <Tab label="Correntes" value="6" />
                    <Tab label="Braceletes" value="7" />
                    <Tab label="Aneis de Pé" value="8" />
                    <Tab label="Alianças" value="9" />
                    <Tab label="Berloques" value="10" />
                    <Tab label="Masculino" value="11" />
                    <Tab label="Gargantilhas" value="12" />
                    <Tab label="Infantil" value="13" />
                    <Tab label="Argolas" value="14" />
                    <Tab label="Piercings" value="15" />           
                </TabList>
                </Box>
            </TabContext>
            </Box>
        </div>
        <div className='overflow-hidden bg-blue-500 h-[63vh] w-[100vw] flex flex-row '>
            <Box sx={{ width: '100%' }}>
              <TabContext value={menupeca}>
                  <TabPanel value="1">
                    <Panels  menupeca={menupeca}></Panels>  
                  </TabPanel>
                  <TabPanel value="2">
                    <Panels  menupeca={menupeca}></Panels>
                  </TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
        </div>
    </div>
      
    </>
  );
}
