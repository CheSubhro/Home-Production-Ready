
import React from 'react'
import { Box, Typography, IconButton, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductCard = ({ product }) => {
    return (
        <Box className="product-card">
            <Box className="product-image-wrapper">
                {product.discount && (
                <Badge badgeContent={`-${product.discount}%`} color="error" className="discount-tag" />
                )}
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image" 
                />
                
                {/* Hover Actions */}
                <Box className="product-hover-actions">
                <IconButton className="action-btn"><FavoriteBorderIcon /></IconButton>
                <IconButton className="action-btn primary"><ShoppingCartOutlinedIcon /></IconButton>
                </Box>
            </Box>

            <Box className="product-info">
                <Typography variant="caption" color="textSecondary" className="product-category">
                {product.category}
                </Typography>
                <Typography variant="h6" className="product-name">
                {product.name}
                </Typography>
                <Box className="product-price-wrapper">
                <Typography className="current-price">₹{product.price}</Typography>
                {product.oldPrice && (
                    <Typography className="old-price">₹{product.oldPrice}</Typography>
                )}
                </Box>
            </Box>
        </Box>
    )
}

export default ProductCard