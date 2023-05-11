import React from 'react';
import {Card,CardMedia,CardContent,Typography} from '@mui/material';


function DishItem({imageUrl="default",dishName="default",dishDescription="default"}){
    return (
        <>
            <Card>
                <CardMedia 
                    component="img"
                    height="200"
                    image={imageUrl}
                    alt="Food Image 1"
                    
                />

                <CardContent>
                    <Typography variant='h5' component="div">
                    {dishName}

                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                    {dishDescription}

                    </Typography>
                </CardContent>
            </Card>
            
                
        
        </>
    );
}

export default DishItem;