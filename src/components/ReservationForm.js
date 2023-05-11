import React,{useState} from 'react';
import { Typography, TextField,Button,Box,Container } from '@mui/material';

function ReservationForm(){
    const [reservationData,setReservationData]=useState({
        name:'',
        email:'',
        phone:'',
        date:'',
        time:'',
        guest:'',
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setReservationData((prevData)=>({
            ...prevData,
            [name]:value,
        })  )  }

    const handleSubmit=(event)=>{
        event.preventDefault();
    };

return (
    <>
        <Box py={3} bgcolor="grey.200">
        <Container maxWidth="md">
            <Typography variant='h6' align='center' gutterBottom>
            Make a Reservation
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='name' 
                    name='name'
                    label='Your Name'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.name}
                    onChange={handleChange}

                />
                 <TextField
                    id='email' 
                    name='email'
                    label='Your Email'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.email}
                    onChange={handleChange}

                />
                 <TextField
                    id='phone'
                    name='phone'
                    label='Your Phone'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.phone}
                    onChange={handleChange}

                />
                 <TextField
                    id='date' 
                    name='date'
                    label=' Date'
                    type='date'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.date}
                    onChange={handleChange}
                    InputLabelProps={{shrink:true}}

                />
                <TextField
                    id='time' 
                    name='time'
                    label='Time'
                    type='time'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.time}
                    onChange={handleChange}
                    InputLabelProps={{shrink:true}}

                />
                    <TextField
                    id='guests' 
                    name='guests'
                    label='Number Of Guest'
                    variant='outlined'
                    type='number'
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.guest}
                    onChange={handleChange}
                    InputLabelProps={{shrink:true}}

                />
                <Button type='submit' variant='contained' color='primary' fullWidth>Make Reservation</Button>
            </form>
        </Container>

        </Box>
    </>
);
}

export default ReservationForm;