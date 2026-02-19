
import React from 'react'
import { Box, Typography, Button } from '@mui/material';

const VideoBanner = () => {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '70vh', overflow: 'hidden', my: 8 }}>
            {/* Background Video - Working MP4 Link */}
            <iframe
                style={{ width: '100%', height: '100%', objectFit: 'cover', border: 'none' }}
                src="https://www.youtube.com/embed/I75aZRRMNM0?autoplay=1&mute=1&loop=1&playlist=I75aZRRMNM0&controls=0&showinfo=0"
                allow="autoplay; encrypted-media"
                allowFullScreen >
            </iframe>

            {/* Overlay Text */}
            <Box sx={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                bgcolor: 'rgba(0,0,0,0.5)', // Ektu dark korlam jate text bhalo bojha jay
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', 
                color: '#fff', textAlign: 'center',
                px: 2
            }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, textTransform: 'uppercase' }}>
                    CRAFTED FOR SPEED
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px' }}>
                    Performance meets urban style. Experience the new collection designed for champions.
                </Typography>
                <Button 
                    variant="contained" 
                    sx={{ 
                        bgcolor: '#ff4e00', 
                        px: 6, 
                        py: 2, 
                        fontWeight: 700,
                        fontSize: '1rem',
                        '&:hover': { bgcolor: '#e64500' }
                    }}
                >
                    SHOP PERFORMANCE
                </Button>
            </Box>
        </Box>
    )
}

export default VideoBanner