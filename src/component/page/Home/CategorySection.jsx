
import React from 'react'
import { Box, Typography, Container } from '@mui/material';

const categories = [
    { id: 1, name: "SNEAKERS", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600", gridArea: '1 / 1 / 3 / 2' }, // Boro box
    { id: 2, name: "BOOTS", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600", gridArea: '1 / 2 / 2 / 3' },
    { id: 3, name: "CASUAL", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600", gridArea: '2 / 2 / 3 / 3' },
];

const CategorySection = () => {
    return (
        <Container maxWidth="xl" sx={{ my: 8 }}>
            <Typography variant="h4" className="section-title">SHOP BY CATEGORY</Typography>
      
            <div className="category-grid">
                {categories.map((cat) => (
                <Box 
                    key={cat.id} 
                    className="category-box" 
                    sx={{ 
                        backgroundImage: `url(${cat.img})`,
                        gridArea: { md: cat.gridArea } // Desktop-e boro-chhoto layout
                    }}
                >
                    <div className="category-overlay">
                    <Typography variant="h4" className="category-text">{cat.name}</Typography>
                    <button className="category-btn">EXPLORE</button>
                    </div>
                </Box>
                ))}
            </div>
        </Container>
    )
}

export default CategorySection