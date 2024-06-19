import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';


interface AuxProps{
    urlimagem:string
    descricao:string
    valor:string
    parcelamento:string
}

export default function CardsModel({urlimagem,descricao,valor,parcelamento}:AuxProps) {

  return (
<>
    <ButtonBase>
        <Card sx={{ width: 250, height: 300 }}>
        <CardMedia
            component="img"
            sx={{ height: 170, objectFit: "contain" }}
            image={urlimagem} 
        />
        <CardContent className=" flex flex-col">
            <Typography className="flex font-bold " gutterBottom variant="h7" component={'div'}>
                {descricao}
                
            </Typography>
            <div className="flex flex-row justify-between  ">
                <div>
                    <Typography className=" flex" variant="body2">{valor}</Typography>
                    <Typography className="" variant="body2">{parcelamento}</Typography>
                </div>
            <CardActions className="">
            <IconButton>
                <ShoppingCartIcon />
            </IconButton>
            </CardActions>
            </div>
        </CardContent>
        </Card>
    </ButtonBase>
</>    
  );
}
