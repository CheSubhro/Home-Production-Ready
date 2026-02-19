import React from 'react'
import { Container, Typography, Box } from '@mui/material';
import ProductCard from './ProductCard'



const ProductGrid = ({ title, products }) => {
    return (
        <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}> 
            <Container maxWidth="xl">
                <Typography variant="h4" className="section-title">
                    {title}
                </Typography>

                <div className="custom-product-grid">
                    {products && products.map((product) => (
                        <div className="grid-item" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </Container>
        </Box>
    )
}

export default ProductGrid