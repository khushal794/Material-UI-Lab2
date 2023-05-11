import React from 'react';
import { FormControl,Typography,TextField,Button,Box } from '@mui/material';


function FeedbackForm(){
    const handleSubmit=(event)=>{
          event.preventdefault();
    };

    return (
        <Box py={3} mr={3} ml={3}>
            <Typography variant='h6' align='center' gutterBottom>
                Any Suggestions
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='name'
                    label='Name'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                />
                  <TextField
                    id='email'
                    label='Your Email'
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    required
                />
                  <TextField
                    id='feedback'
                    label='Your Feedback'
                    variant='outlined'
                    margin='normal'
                    multiline
                    rows={4}
                    fullWidth
                    required
                />
                <Button type='submit' onSubmit={handleSubmit} variant='containe' bgcolor='primary' color='primary' fullWidth>Submit Feedback</Button>
            </form>
        </Box>
    );
}

export default FeedbackForm;