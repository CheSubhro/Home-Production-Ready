
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const featureList = [
    { id: 1, icon: <LocalShippingIcon fontSize="large" />, title: "FREE SHIPPING", desc: "On orders over ₹999" },
    { id: 2, icon: <AutorenewIcon fontSize="large" />, title: "7 DAYS RETURN", desc: "Easy exchange policy" },
    { id: 3, icon: <VerifiedUserIcon fontSize="large" />, title: "SECURE PAYMENT", desc: "100% safe checkout" },
    { id: 4, icon: <HeadsetMicIcon fontSize="large" />, title: "24/7 SUPPORT", desc: "Dedicated assistance" },
];

const Features = () => {
    return (
        <Box sx={{ 
            width: '100%', 
            py: 6, // Upor niche ektu beshi padding
            bgcolor: '#000', 
            color: '#fff',
            borderBottom: '1px solid #333'
          }}>
            <Container maxWidth="xl">
              <Grid 
                container 
                spacing={4} // Eta protita item er majhe faka (gap) toiri korbe
                justifyContent="center" 
                alignItems="center"
              >
                {featureList.map((item) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={3} 
                    key={item.id} 
                    sx={{ 
                      textAlign: 'center', 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      px: 2 // Horizontal padding jate gha-ghasi na hoy
                    }}
                  >
                    {/* Icon Box */}
                    <Box sx={{ 
                      color: '#ff4e00', 
                      mb: 2,
                      transition: '0.3s',
                      '&:hover': { transform: 'scale(1.1)' } // Chhotto animation
                    }}>
                      {item.icon}
                    </Box>
      
                    {/* Title */}
                    <Typography variant="h6" fontWeight="900" sx={{ 
                      fontSize: '0.9rem', 
                      letterSpacing: '2px',
                      mb: 1 
                    }}>
                      {item.title}
                    </Typography>
      
                    {/* Description */}
                    <Typography variant="caption" sx={{ 
                      opacity: 0.6, 
                      letterSpacing: '1px',
                      lineHeight: 1.5
                    }}>
                      {item.desc}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Container>
        </Box>
    )
}

export default Features