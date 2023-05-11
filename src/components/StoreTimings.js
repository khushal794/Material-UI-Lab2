import React from 'react';
import { Typography,Box,Container } from '@mui/material';


function StoreTimings(){
    return (
        <Box py={3} bgcolor="green" color="white">
        <Container maxWidth="md">
            <Typography variant='h6' align='center' gutterBottom>
                Store Timings
            </Typography>
            <Typography variant='body1' align='center'>
                Monday : 09:00 AM to 09:00 PM <br/>
                Tuesday : 09:00 AM to 09:00 PM <br/>
                Wednesday : 09:00 AM to 09:00 PM <br/>
                Thrusday : 09:00 AM to 09:00 PM  <br/>
            </Typography>
            <Typography variant='body1' align='center'>
                Friday : 10:00 AM to 08:00 PM <br/>
                Saturday : 10:00 AM to 08:00 PM <br/>
                Sunday : 10:00 AM to 08:00 PM <br/>
                
            </Typography>
        </Container>

        </Box>
    );
}

export default StoreTimings;