
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Box, Typography, Container, Avatar, Rating } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';


const reviews = [
    { id: 1, name: "Rahul S.", review: "Best sneakers I've ever owned. The comfort is next level!", rating: 5 },
    { id: 2, name: "Priya M.", review: "The design is so unique. I get compliments every time I wear them.", rating: 5 },
    { id: 3, name: "Arjun K.", review: "Fast delivery and premium packaging. Very impressed.", rating: 4 },
];

const Testimonials = () => {
    return (
        <Box sx={{ py: 10, bgcolor: '#f9f9f9' }}>
            <Container maxWidth="md">
                <Typography variant="h4" textAlign="center" fontWeight="900" mb={6}>WHAT OUR CLIENTS SAY</Typography>
                <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                >
                {reviews.map((item) => (
                    <SwiperSlide key={item.id}>
                    <Box sx={{ textAlign: 'center', pb: 5 }}>
                        <Rating value={item.rating} readOnly sx={{ mb: 2, color: '#ff4e00' }} />
                        <Typography variant="h5" sx={{ fontStyle: 'italic', mb: 3 }}>"{item.review}"</Typography>
                        <Typography variant="subtitle1" fontWeight="700">— {item.name}</Typography>
                    </Box>
                    </SwiperSlide>
                ))}
                </Swiper>
            </Container>
        </Box>
    )
}

export default Testimonials