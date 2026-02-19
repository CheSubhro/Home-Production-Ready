
import React from 'react'
import { Box, Typography, Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';;

const instaPosts = [
    { id: 1, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400" },
    { id: 2, img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=400" },
    { id: 3, img: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=400" },
    { id: 4, img: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=400" },
    { id: 5, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=400" },
    { id: 6, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400" },
];

const InstagramFeed = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#fff' }}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
                <Typography variant="h4" fontWeight="900" sx={{ letterSpacing: '2px' }}>
                    SHOP THE LOOK
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Tag us **@Ecomm** to get featured
                </Typography>
            </Box>

            <Grid container spacing={1} sx={{ px: { xs: 1, md: 4 } }}>
                {instaPosts.map((post) => (
                <Grid item xs={6} sm={4} md={2} key={post.id}>
                    <Box className="insta-container" sx={{ 
                        position: 'relative', 
                        overflow: 'hidden', 
                        aspectRatio: '1/1',
                        cursor: 'pointer',
                        '&:hover .insta-overlay': { opacity: 1 },
                        '&:hover img': { transform: 'scale(1.1)' }
                    }}>
                    <img 
                        src={post.img} 
                        alt="Instagram Look" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover', 
                            transition: 'transform 0.6s ease' 
                        }} 
                    />
                    
                    {/* Hover Overlay */}
                    <Box className="insta-overlay" sx={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                        bgcolor: 'rgba(255, 78, 0, 0.8)', // Theme color orange
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        opacity: 0, transition: '0.4s ease'
                    }}>
                        <IconButton sx={{ color: '#fff' }}>
                            <InstagramIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    </Box>
                </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default InstagramFeed