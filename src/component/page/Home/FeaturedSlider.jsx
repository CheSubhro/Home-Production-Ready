
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Box, Typography, Container } from '@mui/material';
import ProductCard from'./ProductCard'
import 'swiper/css';
import 'swiper/css/navigation';

const FeaturedSlider = ({ title, products }) => {
    return (
        <Container maxWidth="xl" sx={{ my: 10 }}>
            <Typography variant="h4" className="section-title">{title}</Typography>
      
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                breakpoints={{
                640: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
                }}
                className="featured-swiper"
            >
                {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default FeaturedSlider