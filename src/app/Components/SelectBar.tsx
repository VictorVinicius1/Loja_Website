import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pulseira from '../assets/pulseira.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';



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
    {console.log('iguana', pulseira)}
    <div className='bg-purple-00 h-[50vh] w-[100vw]'>
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
        <div className='bg-blue-500 h-[63vh] w-[100vw] flex flex-row '>
            <Box sx={{ width: '100%' }}>
            <TabContext value={menupeca}>
                <TabPanel value="1">Pulseiras
                <Card sx={{ width: 250, height:270}}>
                    <CardMedia
                        component='img'
                        sx={{ height: 170, objectFit: 'contain'}}
                        image='/_next/static/media/pulseira.f5342789.png'
                        />
                    <CardContent className='justify-center flex'>
                      <Typography gutterBottom variant='h7'>
                        Pulseira Pipoca 45cm
                      </Typography>
                    <CardActions>
                      <IconButton >
                        <ShoppingCartIcon />
                        </IconButton>
                      </CardActions>
                    </CardContent>
                    </Card>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
            </Box>
        </div>
    </div>
      
    </>
  );
}
