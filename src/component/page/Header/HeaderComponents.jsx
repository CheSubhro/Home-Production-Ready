import React,{useState,useEffect } from 'react';
import { Box, Typography, IconButton, Badge, 
        Drawer, List, ListItem, ListItemText,
        InputBase,Paper,Dialog, DialogContent, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Wishlist Icon
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// 1. Logo Component
export const Logo = () => (

    <Typography variant="h5" className="logo-text">
        EComm
    </Typography>
);

//  Dynamic Navigation Links
export const NavMenu = ({ items }) => (
    <Box className="nav-container">
      {items.map((item) => (
        <Box key={item.id} className="nav-item-wrapper">
          <Typography className="nav-link">
            {item.label}
          </Typography>
          
          {/* Dropdown Menu */}
          {item.subMenu && (
            <Box className="dropdown-menu">
              <List>
                {item.subMenu.map((sub, i) => (
                  <ListItem button key={i} className="dropdown-item">
                    <ListItemText primary={sub} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      ))}
    </Box>
);

// 3. Right Side Icons
export const HeaderActions = () => (
    <Box className="actions-container">
        <IconButton><SearchIcon /></IconButton>
        <IconButton><PersonOutlineIcon /></IconButton>
        <IconButton>
            <Badge badgeContent={2} color="error">
            <ShoppingBagOutlinedIcon />
            </Badge>
        </IconButton>
    </Box>
);

// DynamicSearch 

export const DynamicSearch = ({ isActive, setIsActive }) => {

    const trendingItems = ['Sneakers', 'Running Shoes', 'Boots', 
                           'Oversized T-shirts', 'Leather Belts'];
    return (
        <Box className="search-outer-container">
            <Box className={`search-wrapper ${isActive ? 'active' : ''}`}>
                <IconButton onClick={() => setIsActive(!isActive)}>
                {isActive ? <CloseIcon /> : <SearchIcon />}
                </IconButton>
                
                <InputBase
                placeholder="Search for sneakers..."
                className="search-input"
                autoFocus={isActive}
                />
            </Box>

            {/* Trending Search Dropdown */}
            {isActive && (
                <Paper elevation={3} className="trending-dropdown">
                <Typography variant="subtitle2" className="trending-title">
                    <TrendingUpIcon sx={{ fontSize: 16, mr: 1 }} /> TRENDING SEARCHES
                </Typography>
                <List>
                    {trendingItems.map((item, index) => (
                    <ListItem button key={index} className="trending-item">
                        <ListItemText primary={item} />
                    </ListItem>
                    ))}
                </List>
                </Paper>
            )}
        </Box>
    );
};

//  Wishlist Icon with Badge
export const WishlistAction = ({ count }) => (
    <IconButton>
        <Badge badgeContent={count} color="error">
            <FavoriteBorderIcon />
        </Badge>
    </IconButton>
);

//  Mobile Drawer Component
export const MobileMenu = ({ open, onClose, items }) => (
    <Drawer anchor="left" open={open} onClose={onClose}>
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
            <List>
            {items.map((item) => (
                <ListItem button key={item.id}>
                <ListItemText primary={item.label} sx={{ fontWeight: 600 }} />
                </ListItem>
            ))}
            </List>
        </Box>
    </Drawer>
);

// login and signup
export const AuthModal = ({ open, handleClose }) => {

    const [isLogin, setIsLogin] = useState(true); 
  
    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
            <Box sx={{ position: 'relative', p: 2 }}>
            <IconButton 
                onClick={handleClose} 
                sx={{ position: 'absolute', right: 8, top: 8 }}
            >
                <CloseIcon />
            </IconButton>
            
            <DialogContent>
                <Typography variant="h5" fontWeight="700" textAlign="center" mb={3}>
                {isLogin ? 'LOGIN' : 'SIGN UP'}
                </Typography>
    
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {!isLogin && (
                    <TextField label="Full Name" variant="outlined" fullWidth />
                )}
                <TextField label="Email Address" variant="outlined" fullWidth />
                <TextField label="Password" type="password" variant="outlined" fullWidth />
                
                <Button 
                    variant="contained" 
                    className="auth-btn"
                    fullWidth
                >
                    {isLogin ? 'Login' : 'Create Account'}
                </Button>
    
                <Typography variant="body2" textAlign="center" mt={2}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span 
                    className="auth-toggle" 
                    onClick={() => setIsLogin(!isLogin)}
                    >
                    {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </Typography>
                </Box>
            </DialogContent>
            </Box>
        </Dialog>
    );
};

// AnnouncementBar 
export const AnnouncementBar = () => {
    const messages = [
      "FREE SHIPPING ON ALL ORDERS ABOVE ₹999",
      "GET 10% OFF - USE CODE: BACCA10",
      "NEW WINTER COLLECTION IS NOW LIVE!"
    ];
  
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 3000); // 3 second por por change hobe
      return () => clearInterval(timer);
    }, [messages.length]);
  
    return (
        <Box className="announcement-bar">
            <Typography variant="caption" className="announcement-text">
                {messages[index]}
            </Typography>
        </Box>
    );
};

  