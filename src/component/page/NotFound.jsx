
import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 10 }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h5">Oops! Page not found.</Typography>
                <Button 
                    variant="contained" 
                    onClick={() => navigate('/')} 
                    sx={{ mt: 3 }}
                >
                    Go Back Home
                </Button>
            </Box>
        </>
    )
}

export default NotFound