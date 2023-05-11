import React from 'react';
import { Typography, Container,Box } from '@mui/material';


function Footer(){
    return (
        <footer>
            <br/><br/>
            <Box bgcolor='green' py={3} color='white'>
                <Container maxWidth="md">
                    <Typography variant='body2' align='center'>
                    Follow Us on Social Media
                    <br/><br/>
                    <Typography variant='body2' align='center' color='white'>
                    Facebook | Instagram | Youtube | Twitter | Linkedin
                    

                    </Typography>

                    </Typography>
                    <br/>
                    <Typography variant='body2' align='center'>
                    Address:- Jaipur Rajasthan
                    

                    </Typography>
                </Container>
            </Box>
        </footer>
    );
}


export default Footer;