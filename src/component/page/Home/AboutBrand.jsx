import React from 'react'
import { Box, Grid, Typography, Button, Container } from '@mui/material';

const AboutBrand = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#fff', overflow: 'hidden' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8} alignItems="center">
          
          {/* Left Side: Image Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop" 
                alt="Premium Sneaker" 
                style={{ 
                  width: '100%', 
                  borderRadius: '20px',
                  boxShadow: '20px 20px 0px #ff4e00' // Stylish offset shadow
                }} 
              />
            </Box>
          </Grid>

          {/* Right Side: Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: '#ff4e00', fontWeight: 800, letterSpacing: '3px' }}>
              SINCE 1994
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, my: 2, lineHeight: 1.1 }}>
              STEP INTO <br /> 
              <span style={{ color: '#ff4e00' }}>REVOLUTION</span>
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Bacca Bucci represents the spirit of urban fashion. We don't just make shoes; 
              we craft experiences that define who you are. Every stitch, every sole, 
              and every design is made with premium materials for those who dare to lead.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#000', 
                color: '#fff', 
                px: 5, 
                py: 1.5, 
                borderRadius: '0',
                fontWeight: 700,
                '&:hover': { bgcolor: '#ff4e00' }
              }}
            >
              OUR STORY
            </Button>
          </Grid>

        </Grid>
      </Container>
    </Box>
    )
}

export default AboutBrand