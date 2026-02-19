
import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const sliderData = [
    {
      id: 1,
      title: "STEP INTO THE FUTURE",
      subtitle: "New Arrival 2024",
      desc: "Explore the latest collection of premium sneakers.",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070",
      color: "#ff4e00"
    },
    {
      id: 2,
      title: "UNLEASH YOUR SPEED",
      subtitle: "Performance Series",
      desc: "Lightweight running shoes for maximum agility.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070",
      color: "#007bff"
    }
];

const Hero = () => {
    return (
        // <Box className="hero-section">
        //     <Container maxWidth="xl" className="hero-container">
        //         <Box className="hero-content">
        //         <Typography variant="overline" className="hero-subtitle">
        //             New Arrival 2024
        //         </Typography>
        //         <Typography variant="h1" className="hero-title">
        //             STEP INTO <br /> <span>THE FUTURE</span>
        //         </Typography>
        //         <Typography variant="body1" className="hero-description">
        //             Explore the latest collection of premium sneakers designed for comfort and style.
        //         </Typography>
        //         <Button variant="contained" className="hero-btn">
        //             SHOP NOW
        //         </Button>
        //         </Box>
        //     </Container>
        // </Box>
        <Box className="hero-slider-wrapper">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                navigation={true}
                className="mySwiper"
            >
                {sliderData.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <Box 
                    className="hero-slide" 
                    sx={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
                    >
                    <Container maxWidth="xl">
                        <Box className="hero-content">
                        <Typography variant="overline" className="hero-subtitle" sx={{ color: slide.color }}>
                            {slide.subtitle}
                        </Typography>
                        <Typography variant="h1" className="hero-title">
                            {slide.title.split(' ').slice(0, -1).join(' ')} <br /> 
                            <span>{slide.title.split(' ').slice(-1)}</span>
                        </Typography>
                        <Button variant="contained" className="hero-btn" sx={{ backgroundColor: slide.color }}>
                            SHOP NOW
                        </Button>
                        </Box>
                    </Container>
                    </Box>
                </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default Hero