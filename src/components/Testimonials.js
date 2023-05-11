import React from 'react';
import { Typography, Box, Card, Container,CardContent,CardMedia } from '@mui/material';


const Testimonials=()=>{
    const testimonials=[
        {
            id:1,
            name:"Khushal Sharma",
            photo:'https://unsplash.com/photos/zxO5XNYBKL0',
            rating:5,
            testimonial:'lorem epsum dhdfh hbdhjsb jhbdhjdjs jhDGBBHDSJSD JDHBJAHDFKFDN DHASJDHASJKDJ SDHASKJDHASK'

        },
        {
            id:2,
            name:"Apoorva Khandelwal",
            photo:'https://unsplash.com/photos/zxO5XNYBKL0',
            rating:5,
            testimonial:'lorem epsum dhdfh hbdhjsb jhbdhjdjs jhDGBBHDSJSD JDHBJAHDFKFDN DHASJDHASJKDJ SDHASKJDHASK'

        },
        {
            id:3,
            name:"Harjeet Saini",
            photo:'https://unsplash.com/photos/zxO5XNYBKL0',
            rating:5,
            testimonial:'lorem epsum dhdfh hbdhjsb jhbdhjdjs jhDGBBHDSJSD JDHBJAHDFKFDN DHASJDHASJKDJ SDHASKJDHASK'

        },
        
        

    ];

    return (
        <Box py={3} bgcolor="primary.dark" color="white">
            <Container maxWidth="md">
                <Typography variant='h5' align='center' gutterBottom>
                    Testimonials
                </Typography>
                {testimonials.map((testimonial)=>(
                    <Card key={testimonial.id} sx={{display:"flex",mb:2}}>
                    <CardMedia
                        component="img"
                        src={testimonial.photo}
                        alt={testimonial.name}
                        sx={{width:120,objectFit: 'cover'}}
                    />
                    <CardContent>
                        <Typography variant='subtitle1' component="div">
                            {testimonial.name}
                        </Typography>
                        <Typography variant='body2' color="text.secondary" gutterBottom>
                              Rating:{testimonial.rating}/5
                        </Typography>
                        <Typography variant='body2' color="text.secondary" gutterBottom>
                              Testimonial:{testimonial.testimonial}
                        </Typography>

                    </CardContent>

                    </Card>
                ))}
            </Container>
        </Box>
    );
} 


export default Testimonials;